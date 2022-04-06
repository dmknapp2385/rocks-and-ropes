const { FreeWeight } = require('../models');

const db = require('../config/connection');

db.once('open', async () => {
  await FreeWeight.deleteMany({});

  const freeWeightData = [
    {
      name:"Deadlift",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta lorem. Est ullamcorper eget nulla facilisi etiam dignissim diam. Pellentesque diam volutpat commodo sed egestas egestas. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ornare aenean euismod elementum nisi quis eleifend quam. Scelerisque eu ultrices vitae auctor eu augue. Varius duis at consectetur lorem donec massa sapien faucibus et. Amet volutpat consequat mauris nunc congue. Nulla facilisi etiam dignissim diam quis enim lobortis. Sed velit dignissim sodales ut eu sem integer." ,
      image: "../assets/Images/placeholder.jpg"
    },
    {
      name:"Bench Press",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta lorem. Est ullamcorper eget nulla facilisi etiam dignissim diam. Pellentesque diam volutpat commodo sed egestas egestas. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ornare aenean euismod elementum nisi quis eleifend quam. Scelerisque eu ultrices vitae auctor eu augue. Varius duis at consectetur lorem donec massa sapien faucibus et. Amet volutpat consequat mauris nunc congue. Nulla facilisi etiam dignissim diam quis enim lobortis. Sed velit dignissim sodales ut eu sem integer." ,
      image: "../assets/Images/placeholder.jpg"
    },
    {
      name:"Bent Over Row",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta lorem. Est ullamcorper eget nulla facilisi etiam dignissim diam. Pellentesque diam volutpat commodo sed egestas egestas. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ornare aenean euismod elementum nisi quis eleifend quam. Scelerisque eu ultrices vitae auctor eu augue. Varius duis at consectetur lorem donec massa sapien faucibus et. Amet volutpat consequat mauris nunc congue. Nulla facilisi etiam dignissim diam quis enim lobortis. Sed velit dignissim sodales ut eu sem integer." ,
      image: "../assets/Images/placeholder.jpg"
    },
    {
      name:"Lateral Raise",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta lorem. Est ullamcorper eget nulla facilisi etiam dignissim diam. Pellentesque diam volutpat commodo sed egestas egestas. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ornare aenean euismod elementum nisi quis eleifend quam. Scelerisque eu ultrices vitae auctor eu augue. Varius duis at consectetur lorem donec massa sapien faucibus et. Amet volutpat consequat mauris nunc congue. Nulla facilisi etiam dignissim diam quis enim lobortis. Sed velit dignissim sodales ut eu sem integer." ,
      image: "../assets/Images/placeholder.jpg"
    },
    {
      name:"Back Squat",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta lorem. Est ullamcorper eget nulla facilisi etiam dignissim diam. Pellentesque diam volutpat commodo sed egestas egestas. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ornare aenean euismod elementum nisi quis eleifend quam. Scelerisque eu ultrices vitae auctor eu augue. Varius duis at consectetur lorem donec massa sapien faucibus et. Amet volutpat consequat mauris nunc congue. Nulla facilisi etiam dignissim diam quis enim lobortis. Sed velit dignissim sodales ut eu sem integer." ,
      image: "../assets/Images/placeholder.jpg"
    },
    {
      name:"Bicep Curl",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta lorem. Est ullamcorper eget nulla facilisi etiam dignissim diam. Pellentesque diam volutpat commodo sed egestas egestas. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ornare aenean euismod elementum nisi quis eleifend quam. Scelerisque eu ultrices vitae auctor eu augue. Varius duis at consectetur lorem donec massa sapien faucibus et. Amet volutpat consequat mauris nunc congue. Nulla facilisi etiam dignissim diam quis enim lobortis. Sed velit dignissim sodales ut eu sem integer." ,
      image: "../assets/Images/placeholder.jpg"
    },
    {
      name:"Military Press",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod nisi porta lorem. Est ullamcorper eget nulla facilisi etiam dignissim diam. Pellentesque diam volutpat commodo sed egestas egestas. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ornare aenean euismod elementum nisi quis eleifend quam. Scelerisque eu ultrices vitae auctor eu augue. Varius duis at consectetur lorem donec massa sapien faucibus et. Amet volutpat consequat mauris nunc congue. Nulla facilisi etiam dignissim diam quis enim lobortis. Sed velit dignissim sodales ut eu sem integer." ,
      image: "../assets/Images/placeholder.jpg"
    }
    
  ];

  const createFreeWeights = await FreeWeight.collection.insertMany(freeWeightData);

  console.log('all done!');
  process.exit(0);
});
