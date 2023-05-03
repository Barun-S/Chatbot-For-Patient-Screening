export const nodes = [
    {
      id: "1",
      type: "input",
      data: {
        label: "Stomachache"
      },
      position: { x: 250, y: 0 }
    },
    {
      id: "2",
      data: {
        label: "How long have you experienced stomachache?"
      },
      position: { x: 250, y: 80 }
    },
    {
      id: "3",
      data: {
        label: "What did you eat?"
      },
      position: { x: 250, y: 200 }
    },
    {
      id: "4",
      data: {
        label: "What is the location of pain?"
      },
      position: { x: 250, y: 300 }
    },
    {
      id: "5",
      data: {
        label: "Describe the type of pain?"
      },
      position: { x: 250, y: 400 }
    },
    {
      id: "6",
      data: {
        label: "Describe the severity of pain?"
      },
      position: { x: 250, y: 540 }
    },
    {
      id: "7",
      data: {
        label: "Is the pain fixed or radiating over locations near stomach?"
      },
      position: { x: 250, y: 650 }
    },
    {
      id: "8",
      data: {
        label: "Is there any pain during micturition (during urination)?"
      },
      position: { x: 250, y: 750 }
    },
    {
      id: "9",
      data: {
        label: "Have you taken any medicine for stomachache?"
      },
      position: { x: 250, y: 850 }
    },
    {
      id: "10",
      data: {
        label: "Is there any blood in stool?"
      },
      position: { x: 250, y: 950 }
    },
    {
      id: "11",
      data: {
        label: "Do you have any personal habit of smoking or drinking alcohol?"
      },
      position: { x: 250, y: 1050 }
    },
    {
      id: "12",
      data: {
        label: "End"
      },
      position: { x: 250, y: 1180 }
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
      animated: true
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
      // label: "yes"
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
    }
  ];
  