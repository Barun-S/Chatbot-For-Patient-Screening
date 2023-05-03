export const nodes = [
    {
      id: "1",
      type: "input",
      data: {
        label: "Headache"
      },
      position: { x: 250, y: 0 }
    },
    {
      id: "2",
      data: {
        label: "How long have you experienced headache?"
      },
      position: { x: 250, y: 80 }
    },
    {
      id: "3",
      data: {
        label: "Is it sudden or gradual?"
      },
      position: { x: 250, y: 160 }
    },
    {
      id: "4",
      data: {
        label: "Where is it located - Front, Back or In a Ribbon across head?"
      },
      position: { x: 250, y: 250 }
    },
    {
      id: "5",
      data: {
        label: "Specify the type or Nature of pain?"
      },
      position: { x: 250, y: 370 }
    },
    {
      id: "6",
      data: {
        label:
          "Is there any kind of radiation, i.e, radiation to eyes, ears, etc.?"
      },
      position: { x: 250, y: 470 }
    },
    {
      id: "7",
      data: {
        label:
          "Is it aggregated by light, noise, hunger, less sleep, insomenia, etc."
      },
      position: { x: 250, y: 570 }
    },
    {
      id: "8",
      data: {
        label: "Specify if you are also experiencing nausea or vomiting?"
      },
      position: { x: 250, y: 670 }
    },
    {
      id: "9",
      data: {
        label:
          "Do you have pain in sinus region or discharge through sinus region."
      },
      position: { x: 250, y: 800 }
    },
    {
      id: "10",
      data: {
        label: "Do you recently had stress work or hectic schedule?"
      },
      position: { x: 250, y: 940 }
    },
    {
      id: "11",
      data: {
        label: "Do you have eye strain/ vision problem?"
      },
      position: { x: 250, y: 1050 }
    },
    {
      id: "12",
      data: {
        label:
          "Any previous traumatic life history/ chronic disease/ ongoing or past treatment history?"
      },
      position: { x: 250, y: 1150 }
    },
    {
      id: "13",
      data: {
        label: "Do you have anxiety and fatigue?"
      },
      position: { x: 250, y: 1280 }
    },
    {
      id: "14",
      data: {
        label: "Have you taken any medicine for headache?"
      },
      position: { x: 250, y: 1380 }
    },
    {
      id: "15",
      data: {
        label: "End"
      },
      position: { x: 250, y: 1480 }
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
    },
    {
      id: "e12-13",
      source: "12",
      target: "13",
      type: "smoothstep",
      animated: true
      // label: "yes"
    },
    {
      id: "e13-14",
      source: "13",
      target: "14",
      type: "smoothstep",
      animated: true
      // label: "yes"
    },
    {
      id: "e14-15",
      source: "14",
      target: "15",
      type: "smoothstep",
      animated: true
      // label: "yes"
    }
  ];
  