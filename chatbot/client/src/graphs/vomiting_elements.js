export const nodes = [
    {
      id: "1",
      type: "input",
      data: {
        label: "Vomiting"
      },
      position: { x: 250, y: 0 }
    },
    {
      id: "2",
      data: {
        label: "When did vomiting begin?"
      },
      position: { x: 250, y: 80 }
    },
    {
      id: "3",
      data: {
        label: "What is the color of vomiting??"
      },
      position: { x: 250, y: 160 }
    },
    {
      id: "4",
      data: {
        label: "Does it occur on full stomach or empty stomach?"
      },
      position: { x: 250, y: 250 }
    },
    {
      id: "5",
      data: {
        label: "Does it occur along with abdominal pain?"
      },
      position: { x: 250, y: 370 }
    },
    {
      id: "6",
      data: {
        label: "Is it accompanied with headaches?"
      },
      position: { x: 250, y: 470 }
    },
    {
      id: "7",
      data: {
        label: "Is it a one sided headache?"
      },
      position: { x: 500, y: 470 }
    },
    {
      id: "8",
      data: {
        label:
          "Is it accompanied with blurred vision and aggeragated with flashing lights?"
      },
      position: { x: 700, y: 470 }
    },
    {
      id: "9",
      data: {
        label: "Is it associated with diarhea?"
      },
      position: { x: 250, y: 570 }
    },
    {
      id: "10",
      data: {
        label: "Do you often see blood in urine or blood in stool?"
      },
      position: { x: 250, y: 670 }
    },
    // {
    //   id: "11",
    //   data: {
    //     label: "Have you taken any medicine in the past for cough?"
    //   },
    //   position: { x: 250, y: 1050 }
    // },
    {
      id: "11",
      data: {
        label: "End"
      },
      position: { x: 250, y: 790 }
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
      id: "e6-9",
      source: "6",
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
    }
    // {
    //   id: "e11-12",
    //   source: "11",
    //   target: "12",
    //   type: "smoothstep",
    //   animated: true
    //   // label: "yes"
    // }
  ];
  