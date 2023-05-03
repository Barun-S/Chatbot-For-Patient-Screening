export const nodes = [
    {
      id: "1",
      type: "input",
      data: {
        label: "Chest pain"
      },
      position: { x: 250, y: 0 }
    },
    {
      id: "2",
      data: {
        label: "How long have you had the pain?"
      },
      position: { x: 250, y: 80 }
    },
    {
      id: "3",
      data: {
        label: "What does the pain feel like?"
      },
      position: { x: 250, y: 180 }
    },
    {
      id: "4",
      data: {
        label: "What is the Location of pain?"
      },
      position: { x: 250, y: 280 }
    },
    {
      id: "5",
      data: {
        label: "Is it suddden or gradual?"
      },
      position: { x: 250, y: 380 }
    },
    {
      id: "6",
      data: {
        label: "Is it aggregated with food?"
      },
      position: { x: 250, y: 480 }
    },
    {
      id: "7",
      data: {
        label:
          "Is there any other factor that influences the pain such as walking, or certain body positions?"
      },
      position: { x: 250, y: 580 }
    },
    {
      id: "8",
      data: {
        label: "When did the pain start? How long does it last?"
      },
      position: { x: 250, y: 700 }
    },
    {
      id: "9",
      data: {
        label: "Have you noticed what causes the pain"
      },
      position: { x: 250, y: 800 }
    },
    {
      id: "10",
      data: {
        label: "What makes the pain worse of better?"
      },
      position: { x: 250, y: 900 }
    },
    {
      id: "11",
      data: {
        label: "Is the pain accompanied with pain in arm, shoulder, back or jaw?"
      },
      position: { x: 250, y: 1000 }
    },
    {
      id: "12",
      data: {
        label:
          "Do you experience Sweating, nausea, shortness of breath, or weakness?"
      },
      position: { x: 500, y: 1000 }
    },
    {
      id: "13",
      data: {
        label: "have you experienced lightheadedness or fainting?"
      },
      position: { x: 700, y: 1000 }
    },
    {
      id: "14",
      data: {
        label: "Describe if you have any family history of heart disease?"
      },
      position: { x: 900, y: 1000 }
    },
    {
      id: "15",
      data: {
        label: "Specify if you have any history of heart disease/attacks?"
      },
      position: { x: 1100, y: 1000 }
    },
    {
      id: "16",
      data: {
        label: "Do you exercise regularly?"
      },
      position: { x: 1300, y: 1000 }
    },
    {
      id: "17",
      data: {
        label: "Do you feel a sharp pain when you breathe, cough, or sneeze?"
      },
      position: { x: 250, y: 1150 }
    },
    {
      id: "18",
      data: {
        label: "Do you experience trouble breathing?"
      },
      position: { x: 500, y: 1150 }
    },
    {
      id: "19",
      data: {
        label:
          "Have you experienced sour taste in your mouth, accompanied with a burining sensation in your throat?"
      },
      position: { x: 250, y: 1300 }
    },
    {
      id: "20",
      data: {
        label: "Have you experienced a pain in abdominal area?"
      },
      position: { x: 500, y: 1340 }
    },
    {
      id: "21",
      data: {
        label: "Have you experienced vomiting?"
      },
      position: { x: 700, y: 1340 }
    },
    {
      id: "22",
      data: {
        label: "Have you experienced an injury recently?"
      },
      position: { x: 250, y: 1450 }
    },
    {
      id: "23",
      data: {
        label:
          "Specify if you engage in extreme sports or activities that put strain on chest muscles?"
      },
      position: { x: 250, y: 1550 }
    },
    {
      id: "24",
      data: {
        label: "Do you have any personal habit of smoking or drinking alcohol?"
      },
      position: { x: 250, y: 1700 }
    },
    {
      id: "25",
      data: {
        label: "Do you have any family history of chronic diseases?"
      },
      position: { x: 250, y: 1850 }
    },
    {
      id: "26",
      data: {
        label: "Do you have any past history of diseases or treatments?"
      },
      position: { x: 250, y: 2000 }
    },
    {
      id: "27",
      data: {
        label: "End"
      },
      position: { x: 250, y: 2120 }
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
      animated: true
    },
    {
      id: "e11-12",
      source: "11",
      target: "12",
      type: "smoothstep",
      animated: true,
      label: "yes"
    },
    {
      id: "e12-13",
      source: "5",
      target: "9",
      type: "smoothstep",
      animated: true
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
      id: "e15-16",
      source: "15",
      target: "16",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e11-17",
      source: "11",
      target: "17",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e17-18",
      source: "17",
      target: "18",
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
      id: "e19-22",
      source: "19",
      target: "22",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e22-23",
      source: "22",
      target: "23",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e23-24",
      source: "23",
      target: "24",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e24-25",
      source: "24",
      target: "25",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e25-26",
      source: "25",
      target: "26",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e26-27",
      source: "26",
      target: "27",
      type: "smoothstep",
      animated: true
    }
  ];
  