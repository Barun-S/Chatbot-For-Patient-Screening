export const nodes = [
    {
      id: "1",
      type: "input",
      data: {
        label: "Rashes"
      },
      position: { x: 250, y: 0 }
    },
    {
      id: "2",
      data: {
        label: "What is the location of the rashes?"
      },
      position: { x: 250, y: 80 }
    },
    {
      id: "3",
      data: {
        label: "What is the color of the rashes?"
      },
      position: { x: 250, y: 180 }
    },
    {
      id: "4",
      data: {
        label: "What is the type of rash?"
      },
      position: { x: 250, y: 280 }
    },
    {
      id: "5",
      data: {
        label: "Does the rash itch?"
      },
      position: { x: 250, y: 380 }
    },
    {
      id: "6",
      data: {
        label: "Does the rash form any crust?"
      },
      position: { x: 500, y: 380 }
    },
    {
      id: "7",
      data: {
        label: "Is the rash accompanied with sore throat and fever?"
      },
      position: { x: 700, y: 380 }
    },
    {
      id: "8",
      data: {
        label: "Do you history of any allergic reations? If yes name them?"
      },
      position: { x: 900, y: 380 }
    },
    {
      id: "9",
      data: {
        label: "Is the rash accompanied with fever?"
      },
      position: { x: 250, y: 500 }
    },
    {
      id: "10",
      data: {
        label: "Is the rash made up of flat spots?"
      },
      position: { x: 500, y: 500 }
    },
    {
      id: "11",
      data: {
        label: "Is it accompanied with sore throat, runny nose and red eyes?"
      },
      position: { x: 700, y: 500 }
    },
    {
      id: "12",
      data: {
        label:
          "Is it associated with joint pain?"
      },
      position: { x: 900, y: 500 }
    },
    {
      id: "13",
      data: {
        label: "Is there any medication that you took that mey be allergic to you?"
      },
      position: { x: 250, y: 600 }
    },
    {
      id: "14",
      data: {
        label: "End"
      },
      position: { x: 250, y: 700 }
    }
  ];
  
  export const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "smoothstep",
      animated: true
      // markerEnd: {
      //   type: MarkerType.ArrowClosed
      // }
    },
    { id: "e2-3", source: "2", target: "3", type: "smoothstep", animated: true },
    {
      id: "e3-4",
      source: "3",
      target: "4",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e4-5",
      source: "4",
      target: "5",
      type: "smoothstep",
      animated: true
      // label: "yes"
    },
    {
      id: "e5-6",
      source: "5",
      target: "6",
      type: "smoothstep",
      animated: true,
      label: "yes"
    },
    {
      id: "e6-7",
      source: "6",
      target: "7",
      type: "smoothstep",
      animated: true
      // label: "yes"
    },
    {
      id: "e7-8",
      source: "7",
      target: "8",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e5-9",
      source: "5",
      target: "9",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e9-10",
      source: "9",
      target: "10",
      type: "smoothstep",
      animated: true,
      label: "yes"
    },
    {
      id: "e10-11",
      source: "10",
      target: "11",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e11-12",
      source: "11",
      target: "12",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e9-13",
      source: "5",
      target: "9",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e13-13",
      source: "13",
      target: "14",
      type: "smoothstep",
      animated: true
    }
  ];
  