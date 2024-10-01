import React, { useState, useRef } from "react";
import Graph from "react-vis-network-graph";
import "./Graph.css";
import { FaSearch } from "react-icons/fa";
import NodeIndex from "./NodeIndex.js";
import { nodes, edges } from "./graphdata.js";

function Graphcomp() {
  const [graph, setGraph] = useState({ nodes, edges });
  const [searchId, setSearchId] = useState("");
  const networkRef = useRef(null);

  const option = {
    autoResize: true,
    nodes: {
      shape: "dot",
      scaling: {
        min: 10,
        max: 30,
      },
      font: {
        color: "#343434",
        size: 12,
        face: "Tahoma",
      },
    },
    edges: {
      color: "black",
      width: 0.4,
      length: 150,
      smooth: {
        type: "continuous",
      },
    },
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -50,
        centralGravity: 0.005,
        springConstant: 0.08,
      },
      solver: "forceAtlas2Based",
      maxVelocity: 50,
    },
    height: "100%",
    width: "100%",
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const nodeId = parseInt(searchId, 10);

    if (networkRef.current && !isNaN(nodeId)) {
      const network = networkRef.current;
      const nodePosition = network.getPositions([nodeId]);

      if (nodePosition[nodeId]) {
        network.focus(nodeId, {
          scale: 1.5,
          animation: {
            duration: 1000,
            easingFunction: "easeInOutQuad",
          },
        });
      } else {
        alert(`Node with ID ${nodeId} not found.`);
      }
    }
  };

  const [originalGraph] = useState(graph);

  const resetGraph = () => {
    const resetEdges = graph.edges.map((edge) => ({
      ...edge,
      color: "black",
    }));
    const resetNodes = originalGraph.nodes.map((node) => ({
      ...node,
      font: { color: "black", size: 12, face: "Tahoma" },
    }));
    setGraph({ nodes: resetNodes, edges: resetEdges });
  };

  const highlightNodeAndNeighbors = (nodeId) => {
    const updatedNodes = graph.nodes.map((node) => {
      if (node.id === nodeId) {
        return { ...node, color: "red" };
      }

      const isNeighbor = graph.edges.some(
        (edge) =>
          (edge.from === nodeId && edge.to === node.id) ||
          (edge.to === nodeId && edge.from === node.id)
      );

      return {
        ...node,
        color: isNeighbor ? "red" : "#D3D3D3",
        font: { color: isNeighbor ? "black" : "#D3D3D3" },
      };
    });

    const updatedEdges = graph.edges.map((edge) => ({
      ...edge,
      color: edge.from === nodeId || edge.to === nodeId ? "black" : "#D3D3D3",
    }));

    setGraph({
      nodes: updatedNodes,
      edges: updatedEdges,
    });
  };

  const handleSelectNode = (event) => {
    const { nodes } = event;
    highlightNodeAndNeighbors(nodes[0]);
  };

  return (
    <div className="graph-container">
      <Graph
        graph={graph}
        options={option}
        events={{ selectNode: handleSelectNode, deselectNode: resetGraph }}
        getNetwork={(network) => {
          networkRef.current = network;
        }}
      />
      <NodeIndex />
      <div className="search-bar-container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="Search course by ID"
            className="search-input"
          />
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Graphcomp;
