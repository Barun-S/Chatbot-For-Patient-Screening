export const nodes = [
    {
      id: "1",
      type: "input",
      data: {
        label: "Memory Loss"
      },
      position: { x: 250, y: 0 }
    },
    {
      id: "2",
      data: {
        label: "Do you feel drooping in one side of body."
      },
      position: { x: 250, y: 80 }
    },
    {
      id: "3",
      data: {
        label: "Do you suffer from weakness in one side of the body"
      },
      position: { x: 500, y: 80 }
    },
    {
      id: "4",
      data: {
        label:
          "Do you suffer from dizziness and loss of balance and coordination?"
      },
      position: { x: 700, y: 80 }
    },
    {
      id: "5",
      data: {
        label: "Do you have headache?"
      },
      position: { x: 900, y: 80 }
    },
    {
      id: "6",
      data: {
        label: "Do you suffer from insomenia and have disturbed sleep?"
      },
      position: { x: 250, y: 180 }
    },
    {
      id: "7",
      data: {
        label:
          "Do you suffer from persistent low mood; loss of enjoyment in leisure activities?"
      },
      position: { x: 500, y: 180 }
    },
    {
      id: "8",
      data: {
        label: "Do you have feelings of guilt, worthlessness, and despair?"
      },
      position: { x: 700, y: 180 }
    },
    {
      id: "9",
      data: {
        label:
          "Do you have  Difficulty concentrating, remembering things, and making decisions?"
      },
      position: { x: 900, y: 180 }
    },
    {
      id: "10",
      data: {
        label:
          "Do you experience sweating, rapid heartbeat, breathlessness and dizziness, and insomnia"
      },
      position: { x: 250, y: 280 }
    },
    {
      id: "11",
      data: {
        label: "End"
      },
      position: { x: 250, y: 420 }
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
    {
      id: "e2-3",
      source: "2",
      target: "3",
      type: "smoothstep",
      animated: true,
      label: "yes"
    },
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
      id: "e2-6",
      source: "2",
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
      id: "e7-8",
      source: "7",
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
      id: "e6-10",
      source: "6",
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
    }
  ];
  