const { FreeWeight } = require('../models');

const db = require('../config/connection');

db.once('open', async () => {
  await FreeWeight.deleteMany({});

  const freeWeightData = [
    {
      name:"Deadlift",
      description: "Stand with feet hip width apart. Bend over and grab the barbell, hands a shoulder’s width apart. Bend your knees slightly bent and your back flat (do not round as this can lead to injury). Gaze about three feet in front of you. Make sure to draw your shoulder blades down and back before lifting. When you lift the bar, imagine trying to push the floor away from you with your heels. Drive your hips forward as you stand. Lower in the same fashion, or drop the bar if weight exceeds ability to lower with control. " ,
      image: "deadlift",
      link: "deadlift"
    },
    {
      name:"Bench Press",
      description: "Lie with your back on the bench and dumbbells in straight arms positioned above your chest. Lower the weights at a 45-degree angle to your body until chest level. Drive both weights back up to the starting position and repeat. If you haven’t bench pressed before, consider using a spotter. Additionally, make sure to research how to get into the proper starting position with a kickback if you are attempting to lift heavy dumbbells as trying to get into position with heavy dumbbells can lead to injury",
      image: "bench-press",
      link: 'benchpress'
    },
    {
      name:"Bent Over Row",
      description: "Place the same side hand and knee on a bench with the weight positioned on the floor next to the bench. Grab the weight and with a flat back, pull the weight toward your chest, engaging your lats and lower traps. Lower and repeat." ,
      image: "bent-over-row",
      link: 'bentoverrow'
    },
    {
      name:"Lateral Raise",
      description: "Hold the dumbbells at each side. Stand straight with your shoulder blades drawn down and back. Raise the dumbbells simultaneously directly up and out to the side until your hands are at shoulder level. Lower with control and repeat. " ,
      image: "lateral-raise",
      link: 'lateralraise'
    },
    {
      name:"Back Squat",
      description: "Use the racks to place a barbell at chest level. Step under the bar, squeeze your shoulders back and place the barbell on the meaty part of your drawn back shoulders (your upper trap). With feet hip width apart, stand straight up and walk a few steps forward to clear the rack. Keep your back straight and flat, gaze three feet forward and feet parallel and shoulder’s width apart. Bend your knees and sit back imagining you are about to sit in a chair until your knees are slightly less then 90 degrees. Stand back up by driving your hips forward. " ,
      image: "back-squat",
      link: 'backsquat'
    },
    {
      name:"Bicep Curl",
      description: "Hold the dumbbells in front of your body with your palms facing forward. Starting with your fist, curl your arm forward until you have brought the dumbbell to your shoulder. You can do both arms simultaneously or alternate the weight. Be sure to perform slow and controlled and not use momentum to swing the weight up. " ,
      image: "bicep-curl",
      link: 'bicep'
    },
    {
      name:"Military Press",
      description: "Hold the dumbbells with arms bent and with one end of each dumbbell resting on the fronts of the shoulders, palms facing inward. Drive the weights straight up overhead while simultaneously twisting your palms to face forward. Reverse the motion and repeat. " ,
      image: "placeholder",
      link:'militarypress'
    }
    
  ];

  const createFreeWeights = await FreeWeight.collection.insertMany(freeWeightData);

  console.log('all done!');
  process.exit(0);
});
