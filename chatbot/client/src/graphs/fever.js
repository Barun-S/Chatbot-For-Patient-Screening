import React, { useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  ConnectionLineType,
} from "react-flow-renderer";
// import { edges as initialEdges } from "./fever_elements";
import { Button, Modal, Input, Form } from "antd";

const initialNodes = [
    {
      id: "1",
      type: "input",
      data: {
        label: "Fever"
      },
      position: { x: 250, y: 0 }
    },
    {
      id: "2",
      data: {
        label: "How long have you experienced fever?"
      },
      position: { x: 250, y: 100 }
    },
    {
      id: "3",
      data: {
        label: "Do you have rashes on any part of the body?"
      },
      position: { x: 250, y: 200 }
      // style: {
      //   background: "#D6D5E6",
      //   color: "#333",
      //   border: "1px solid #222138"
      // }
    },
    {
      id: "4",
      data: {
        label: "Is it associated with aches and pain?"
      },
      position: { x: 250, y: 300 }
    },
    {
      id: "5",
      data: {
        label:
          "Do you also have any othrer symptoms such as dry cough, sore throat, and stuffy or runny nose?"
      },
      position: { x: 500, y: 300 }
    },
    {
      id: "6",
      data: {
        label: "Do you also have vomiting and diarrhea?"
      },
      position: { x: 700, y: 300 }
    },
    {
      id: "7",
      data: {
        label: "Do you have abdominal pain?"
      },
      position: { x: 250, y: 430 }
    },
    {
      id: "8",
      data: {
        label: "Is it asociated with cough?"
      },
      position: { x: 500, y: 440 }
    },
    {
      id: "9",
      data: {
        label: "Do you have generalised weakness?"
      },
      position: { x: 700, y: 440 }
    },
    {
      id: "10",
      data: {
        label: "Is it associated with headache and tiredness"
      },
      position: { x: 250, y: 530 }
    },
    {
      id: "11",
      data: {
        label: "Do you experience confusion and dis-orientation?"
      },
      position: { x: 250, y: 630 }
    },
    {
      id: "12",
      data: {
        label: "Do you generally breath fast and shallow?"
      },
      position: { x: 500, y: 630 }
    },
    {
      id: "13",
      data: {
        label: "Do you experience seizures?"
      },
      position: { x: 700, y: 630 }
    },
    {
      id: "14",
      data: {
        label: "Have you ever experienced loss of consciousness?"
      },
      position: { x: 900, y: 630 }
    },
    {
      id: "15",
      data: {
        label: "Have you experienced muscle and joint pain?"
      },
      position: { x: 250, y: 730 }
    },
    {
      id: "16",
      data: {
        label: "Is it associated with headaches?"
      },
      position: { x: 500, y: 730 }
    },
    {
      id: "17",
      data: {
        label: "Is it associated with shivering and sweating?"
      },
      position: { x: 700, y: 730 }
    },
    {
      id: "18",
      data: {
        label: "Have you ever experienced loss of appetite?"
      },
      position: { x: 900, y: 730 }
    },
    {
      id: "19",
      data: {
        label: "Is it associated with diarrhea and vomiting?"
      },
      position: { x: 1100, y: 730 }
    },
    {
      id: "20",
      data: {
        label: "End"
      },
      position: { x: 250, y: 830 }
    }
  ];

const initialEdges = [
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
    { id: "e1-3", source: "2", target: "3", type: "smoothstep", animated: true },
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
    },
    {
      id: "e4-7",
      source: "4",
      target: "7",
      type: "smoothstep",
      animated: true
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
      id: "e7-10",
      source: "7",
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
      animated: true,
      label: "yes"
    },
    {
      id: "e12-13",
      source: "12",
      target: "13",
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
      id: "e18-19",
      source: "18",
      target: "19",
      type: "smoothstep",
      animated: true
    },
    {
      id: "e15-20",
      source: "15",
      target: "20",
      type: "smoothstep",
      animated: true
    }
];
  
function ReactFlowRendererFever() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: ConnectionLineType.SmoothStep,
            animated: true,
            style: { stroke: "red" },
          },
          eds
        )
      ),
    [setEdges]
  );
  const getNodeId = () => Math.random();
  function onInit() {
    console.log("Logged");
  }
  function displayCustomNamedNodeModal() {
    setIsModalVisible(true);
  }
  function handleCancel() {
    setIsModalVisible(false);
  }
  function handleOk(data) {
    onAdd(data.nodeName);
    setIsModalVisible(false);
  }
  const onAdd = useCallback(
    (data) => {
      const newNode = {
        id: String(getNodeId()),
        data: { label: data },
        position: {
          x: 50,
          y: 0,
        },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );
  return (
    <div style={{ height: "100vh", margin: "10px" }}>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <Form onFinish={handleOk} autoComplete="off" name="new node">
          <Form.Item label="Node Name" name="nodeName">
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Button type="primary" onClick={() => displayCustomNamedNodeModal()}>
        Add Custom Name Node
      </Button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        fitView
        attributionPosition="bottom-left"
        connectionLineType={ConnectionLineType.SmoothStep}
      />
    </div>
  );
}

export default ReactFlowRendererFever;
