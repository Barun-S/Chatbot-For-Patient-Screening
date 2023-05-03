export const nodes = [
    {
      id: "1",
      type: "input",
      data: {
        label: "Weight Gain"
      },
      position: { x: 250, y: 0 }
    },
    {
      id: "2",
      data: {
        label: "How much weight have you gained?"
      },
      position: { x: 250, y: 80 }
    },
    {
      id: "3",
      data: {
        label: "In how much time have you gained this weight?"
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
        label: "Do you experience breathlessness?"
      },
      position: { x: 250, y: 380 }
    },
    {
      id: "6",
      data: {
        label: "Do you suffer from swollen ankles?"
      },
      position: { x: 500, y: 380 }
    },
    {
      id: "7",
      data: {
        label: "Do you experience cough?"
      },
      position: { x: 700, y: 380 }
    },
    {
      id: "8",
      data: {
        label: "Do you need to pass urine more often than usual?"
      },
      position: { x: 900, y: 380 }
    },
    {
      id: "9",
      data: {
        label: "Do you have pain in abdomen and legs?"
      },
      position: { x: 250, y: 480 }
    },
    {
      id: "10",
      data: {
        label: "Do you experience tiredness?"
      },
      position: { x: 500, y: 480 }
    },
    {
      id: "11",
      data: {
        label: "Do you have poor appetite?"
      },
      position: { x: 700, y: 480 }
    },
    {
      id: "12",
      data: {
        label: "Do you bruise and bleed easily?"
      },
      position: { x: 900, y: 480 }
    },
    {
      id: "13",
      data: {
        label: "Do you suffer from yellowing of skin and eyes?"
      },
      position: { x: 1100, y: 480 }
    },
    {
      id: "14",
      data: {
        label: "Do you suffer from insomenia and have disturbed sleep?"
      },
      position: { x: 250, y: 580 }
    },
    {
      id: "15",
      data: {
        label:
          "Do you suffer from persistent low mood; loss of enjoyment in leisure activities?"
      },
      position: { x: 500, y: 580 }
    },
    {
      id: "16",
      data: {
        label: "Do you have feelings of guilt, worthlessness, and despair?"
      },
      position: { x: 700, y: 580 }
    },
    {
      id: "17",
      data: {
        label:
          "Do you have  Difficulty in concentrating, remembering things, and making decisions?"
      },
      position: { x: 900, y: 580 }
    },
    {
      id: "18",
      data: {
        label: "End"
      },
      position: { x: 250, y: 680 }
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
      id: "e9-14",
      source: "9",
      target: "14",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e14-15",
      source: "14",
      target: "15",
      type: "smoothstep",
      animated: true,
      label: "yes"
    },
    {
      id: "e15-16",
      source: "15",
      target: "16",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e16-17",
      source: "16",
      target: "17",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e14-18",
      source: "14",
      target: "18",
      type: "smoothstep",
      animated: true
    }
  ];
  