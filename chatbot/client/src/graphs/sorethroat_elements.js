export const nodes = [
    {
      id: "1",
      type: "input",
      data: {
        label: "Sore throat"
      },
      position: { x: 250, y: 0 }
    },
    {
      id: "2",
      data: {
        label: "How long have you experiencing sore throat?"
      },
      position: { x: 250, y: 80 }
    },
    {
      id: "3",
      data: {
        label: "Have you taken any medicine for this symptom in the past?"
      },
      position: { x: 250, y: 200 }
    },
    {
      id: "4",
      data: {
        label:
          "Any other symptom such as runny nose, fever, hymontisis, swelling at neck, etc?"
      },
      position: { x: 250, y: 300 }
    },
    {
      id: "5",
      data: {
        label: "Do you have difficulty in breathing?"
      },
      position: { x: 250, y: 430 }
    },
    {
      id: "6",
      data: {
        label: "Is it associated with pain?"
      },
      position: { x: 250, y: 540 }
    },
    {
      id: "7",
      data: {
        label: "Do you have any history of allergy?"
      },
      position: { x: 250, y: 650 }
    },
    {
      id: "8",
      data: {
        label: "Do you have difficulty in breathing, speaking or eating?"
      },
      position: { x: 250, y: 750 }
    },
    {
      id: "9",
      data: {
        label: "End"
      },
      position: { x: 250, y: 850 }
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
    }
  ];
  