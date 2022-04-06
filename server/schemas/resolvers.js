const { User, Activity } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .populate({
            path: 'savedActivities',
            select: '-__v'
          })
          .select('-__v -password')

        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
    activities: async (parent, args) => {
      const activityData = await Activity.find({})
      .populate({
        path: 'userId',
        select: '-__v'
      })
      return activityData;
    },
    activitiesByDay: async (parent, args) => {
      const activityData = await Activity.find({})
      .where({userId: args.userId, day: args.day })
      .populate({
        path: 'userId',
        select: '-__v'
      })
      return activityData;
    },
    activity: async (parent, { _id }) => {
      const activityData = await Activity.findOne({ _id })
      .populate({
        path: 'userId',
        select: '-__v'
      })
      return activityData;
    },
    freeWeights: async (parent, args) => {
      const weightData = await FreeWeight.find({})
      return weightData;
    },
    freeWeight: async (parent, { _id }) => {
      const freeWeightData = await FreeWeight.findOne({ _id })
      return freeWeightData;
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addActivity: async (parent, { input }, context) => {
      if (context.user) {

        // const activity = await Activity.create(input)

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedActivities: input } },
          { new: true, runValidators: true }
        )

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeActivity: async (parent, args, context) => {
      if (context.user) {
        console.log(args);

        const deletedActivity = await Activity.findOneAndDelete({ _id: args.activityId });
        
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },

          { $pull: { savedActivities: { activityId: args.activityId } } },

          { new: true }
        )

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;