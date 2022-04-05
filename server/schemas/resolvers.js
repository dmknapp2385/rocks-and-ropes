const { User, Activity } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
      
          return userData;
        }
        throw new AuthenticationError('Not logged in');
      },
      activities: async (parent, args) => {
          const activityData = await Activity.find({})
          return activityData;
      },
      activity: async (parent, {_id}) => {
        const activityData = await Activity.findOne({ _id })
        return activityData;
      },
      freeWeights: async (parent, args) => {
          const weightData = await FreeWeight.find({})
          return weightData;
      },
      freeWeight: async (parent, {_id}) => {
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
      addActivity: async(parent, { input }, context) => {
        if(context.user){
          console.log(input);

          const activity = await Activity.create(input)

          console.log(activity);

          const updatedUser = await User.findOneAndUpdate (
            { _id: context._id},
            { $addToSet: { savedActivities: activity } },
            { new: true, runValidators: true }
          );
          return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      removeActivity: async(parent, args, context) => {
        if(context.user){
          const updatedCalendar = await Calendar.findOneAndUpdate(
            { _id: args.id },
            { $pull: { activity: { activityId: args.activityId } } },
            { new: true }
          );

          return updatedCalendar;
        }
        throw new AuthenticationError('You need to be logged in!');
      }
    }
  };
  
  module.exports = resolvers;