export const nodes = [
    {
      id: "1",
      type: "input",
      data: {
        label: "Weight Loss"
      },
      position: { x: 250, y: 0 }
    },
    {
      id: "2",
      data: {
        label: "How much weight have you lost?"
      },
      position: { x: 250, y: 80 }
    },
    {
      id: "3",
      data: {
        label: "In how much time have you lost this weight?"
      },
      position: { x: 250, y: 180 }
    },
    {
      id: "4",
      data: {
        label: "What was your initial weight?"
      },
      position: { x: 250, y: 280 }
    },
    {
      id: "5",
      data: {
        label: "Do you suffer from loss of appetite?"
      },
      position: { x: 250, y: 380 }
    },
    {
      id: "6",
      data: {
        label: "Are you taking certain medication?"
      },
      position: { x: 250, y: 480 }
    },
    {
      id: "7",
      data: {
        label: "Name the medications?"
      },
      position: { x: 500, y: 480 }
    },
    {
      id: "8",
      data: {
        label: "Do you suffer from undernutrition?"
      },
      position: { x: 250, y: 580 }
    },
    {
      id: "9",
      data: {
        label: "Do you have history of alcohol and drug abuse?"
      },
      position: { x: 250, y: 680 }
    },
    {
      id: "10",
      data: {
        label: "Do you suffer from insomenia and have disturbed sleep?"
      },
      position: { x: 250, y: 780 }
    },
    {
      id: "11",
      data: {
        label:
          "Do you suffer from persistent low mood; loss of enjoyment in leisure activities?"
      },
      position: { x: 500, y: 780 }
    },
    {
      id: "12",
      data: {
        label: "Do you have feelings of guilt, worthlessness, and despair?"
      },
      position: { x: 700, y: 780 }
    },
    {
      id: "13",
      data: {
        label:
          "Do you have  Difficulty concentrating, remembering things, and making decisions?"
      },
      position: { x: 900, y: 780 }
    },
    {
      id: "14",
      data: {
        label:
          "Do you experience sweating, rapid heartbeat, breathlessness and dizziness, and insomnia"
      },
      position: { x: 250, y: 880 }
    },
    {
      id: "15",
      data: {
        label: "Is the fatigue accompanied with muscle weakness?"
      },
      position: { x: 250, y: 1040 }
    },
    {
      id: "16",
      data: {
        label: "Do you experience excessive thirst?"
      },
      position: { x: 500, y: 1040 }
    },
    {
      id: "17",
      data: {
        label: "Do you need to pass urine more often than usual?"
      },
      position: { x: 700, y: 1040 }
    },
    {
      id: "18",
      data: {
        label:
          "Do you suffer from reccurent infections and slow healing of wounds"
      },
      position: { x: 900, y: 1040 }
    },
    {
      id: "19",
      data: {
        label: "Do you suffer from abdominal pain?"
      },
      position: { x: 250, y: 1140 }
    },
    {
      id: "20",
      data: {
        label: "Do you suffer from diarrhea?"
      },
      position: { x: 500, y: 1140 }
    },
    {
      id: "21",
      data: {
        label: "Do you also have fever?"
      },
      position: { x: 700, y: 1140 }
    },
    {
      id: "22",
      data: {
        label: "Do you also have a sensation of fullness?"
      },
      position: { x: 900, y: 1140 }
    },
    {
      id: "23",
      data: {
        label: "Do you experince extreme fever and night sweats?"
      },
      position: { x: 250, y: 1250 }
    },
    {
      id: "24",
      data: {
        label: "Do you have cough? If yes, does it contain blood?"
      },
      position: { x: 500, y: 1250 }
    },
    {
      id: "25",
      data: {
        label: "Do you also experience chest pain?"
      },
      position: { x: 700, y: 1250 }
    },
    {
      id: "26",
      data: {
        label: "End"
      },
      position: { x: 250, y: 1360 }
    }
  ];
  
  export const edges = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      type: "smoothstep",
      animated: true
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
    },
    {
      id: "e5-6",
      source: "5",
      target: "6",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e6-7",
      source: "6",
      target: "7",
      type: "smoothstep",
      animated: true,
      label: "yes"
    },
    {
      id: "e6-8",
      source: "6",
      target: "8",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e8-9",
      source: "8",
      target: "9",
      type: "smoothstep",
      animated: true
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
      animated: true,
      label: "yes"
    },
    {
      id: "e11-12",
      source: "11",
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
      animated: true
    },
    {
      id: "e10-14",
      source: "10",
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
      id: "e15-16",
      source: "15",
      target: "16",
      type: "smoothstep",
      animated: true,
      label: "yes"
    },
    {
      id: "e16-17",
      source: "16",
      target: "17",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e17-18",
      source: "17",
      target: "18",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e15-19",
      source: "15",
      target: "19",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e19-20",
      source: "19",
      target: "20",
      type: "smoothstep",
      animated: true,
      label: "yes"
    },
    {
      id: "e20-21",
      source: "20",
      target: "21",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e21-22",
      source: "21",
      target: "22",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e19-23",
      source: "19",
      target: "23",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e23-24",
      source: "23",
      target: "24",
      type: "smoothstep",
      animated: true,
      label: "yes"
    },
    {
      id: "e24-25",
      source: "24",
      target: "25",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e23-26",
      source: "23",
      target: "26",
      type: "smoothstep",
      animated: true
    }
  ];
  