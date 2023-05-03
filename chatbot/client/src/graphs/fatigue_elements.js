export const nodes = [
    {
      id: "1",
      type: "input",
      data: {
        label: "Fatigue"
      },
      position: { x: 250, y: 0 }
    },
    {
      id: "2",
      data: {
        label: "Since how many days do you feel fatigue?"
      },
      position: { x: 250, y: 80 }
    },
    {
      id: "3",
      data: {
        label: "Do you have history of weight loss or loss of appetite?"
      },
      position: { x: 250, y: 180 }
    },
    {
      id: "4",
      data: {
        label: "Have you experienced fainting?"
      },
      position: { x: 250, y: 280 }
    },
    {
      id: "5",
      data: {
        label: "Do you experience increased heart rate?"
      },
      position: { x: 500, y: 280 }
    },
    {
      id: "6",
      data: {
        label: "Do you experience headache?"
      },
      position: { x: 700, y: 280 }
    },
    {
      id: "7",
      data: {
        label: "Do you suffer from paleness of skin?"
      },
      position: { x: 900, y: 280 }
    },
    {
      id: "8",
      data: {
        label: "Is the fatigue accompanied with muscle weakness?"
      },
      position: { x: 250, y: 380 }
    },
    {
      id: "9",
      data: {
        label: "Do you experience excessive thirst?"
      },
      position: { x: 500, y: 380 }
    },
    {
      id: "10",
      data: {
        label: "Do you need to pass urine more often than usual?"
      },
      position: { x: 700, y: 380 }
    },
    {
      id: "11",
      data: {
        label:
          "Do you suffer from reccurent infections and slow healing of wounds"
      },
      position: { x: 900, y: 380 }
    },
    {
      id: "12",
      data: {
        label: "Do you experience breathlessness?"
      },
      position: { x: 250, y: 500 }
    },
    {
      id: "13",
      data: {
        label: "Do you suffer from swollen ankles?"
      },
      position: { x: 500, y: 500 }
    },
    {
      id: "14",
      data: {
        label: "Do you experience cough?"
      },
      position: { x: 700, y: 500 }
    },
    {
      id: "15",
      data: {
        label: "Do you need to pass urine more often than usual?"
      },
      position: { x: 900, y: 500 }
    },
    {
      id: "16",
      data: {
        label: "Do you suffer from abdominal pain?"
      },
      position: { x: 250, y: 600 }
    },
    {
      id: "17",
      data: {
        label: "Do you suffer from diarrhea?"
      },
      position: { x: 500, y: 600 }
    },
    {
      id: "18",
      data: {
        label: "Do you also have fever?"
      },
      position: { x: 700, y: 600 }
    },
    {
      id: "19",
      data: {
        label: "Do you also have a sensation of fullness?"
      },
      position: { x: 900, y: 600 }
    },
    {
      id: "20",
      data: {
        label: "Do you experience extreme fever and night sweats?"
      },
      position: { x: 250, y: 700 }
    },
    {
      id: "21",
      data: {
        label: "Do you have cough? If yes, does it contain blood?"
      },
      position: { x: 500, y: 700 }
    },
    {
      id: "22",
      data: {
        label: "Do you also experience chest pain?"
      },
      position: { x: 700, y: 700 }
    },
    {
      id: "23",
      data: {
        label: "End"
      },
      position: { x: 250, y: 800 }
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
      animated: true,
      label: "yes"
    },
    {
      id: "e5-6",
      source: "5",
      target: "6",
      type: "smoothstep",
      animated: true
      // label: "yes"
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
      id: "e4-8",
      source: "4",
      target: "8",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e8-9",
      source: "8",
      target: "9",
      type: "smoothstep",
      animated: true,
      label: "yes"
    },
    {
      id: "e9-10",
      source: "9",
      target: "10",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e10-11",
      source: "10",
      target: "11",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e8-12",
      source: "8",
      target: "12",
      type: "smoothstep",
      animated: true
      // label: "yes"
    },
    {
      id: "e12-13",
      source: "12",
      target: "13",
      type: "smoothstep",
      animated: true,
      label: "yes"
    },
    {
      id: "e13-14",
      source: "13",
      target: "14",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e14-15",
      source: "14",
      target: "15",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e12-16",
      source: "12",
      target: "16",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e16-17",
      source: "16",
      target: "17",
      type: "smoothstep",
      animated: true,
      label: "yes"
    },
    {
      id: "e17-19",
      source: "17",
      target: "19",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e16-20",
      source: "16",
      target: "20",
      type: "smoothstep",
      animated: true
      // label: "yes"
    },
    {
      id: "e20-21",
      source: "20",
      target: "21",
      type: "smoothstep",
      animated: true,
      label: "yes"
    },
    {
      id: "e21-22",
      source: "21",
      target: "22",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e20-23",
      source: "20",
      target: "23",
      type: "smoothstep",
      animated: true
    }
  ];
  