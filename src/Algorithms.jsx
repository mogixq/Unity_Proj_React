import React from "react";
import AlgoCard from "./AlgoCard";

function Algorithms(props) {
  const BSP_Info =
    "The algorithm is used to create the game map in a procedural way, the map starts as one large space, and the algorithm divides it into two parts, then the algorithm divides each created space into two until each space reaches the minimum allowed size, and this is how the division ends. From the spaces created we create the rooms that make up the game map.";
  const BSP_Img = `.\\images\\BSP_Img.png`;
  const BSP_LinkW = "https://en.wikipedia.org/wiki/Binary_space_partitioning";
  const BSP_LinkG4G ="https://www.geeksforgeeks.org/binary-space-partitioning/";

  const AStar_Info =
    "A* (or A-Star) is a search algorithm, one of the navigation algorithms in the game. Used to find a shortest path from a starting point to a single destination point, in a pseudo-greedy form using a heuristic function that directs it to the ending point. A heuristic is a function used to estimate the remaining cost to the destination. An efficient function will allow A* to find the shortest path efficiently. The complexity of the algorithm in the worst case is (O)|E|log|V|. We chose it because with the help of a good heuristic function of calculating the distance to the target point, the algorithm can significantly improve running times. It is possible to look at the A* algorithm as an extension of Dijkstra with heuristics (in Dijkstra the heuristic function will always be equal to 0).";
  const AStar_Img = `.\\images\\AStar_Img.png`;
  const AStar_LinkW = "https://en.wikipedia.org/wiki/A*_search_algorithm";
  const AStar_LinkG4G ="https://www.geeksforgeeks.org/a-search-algorithm/";

  const BFS_Info =
    "Breadth First Search Algorithm is an efficient method for exploring graphs and finding paths between nodes. It works iteratively, progressing step by step at uniform depth levels. The algorithm is used to position the enemies and the player on the procedurally generated map, so that they are not stuck behind objects making it impossible to reach them, since everything is procedurally generated. The algorithm runs with a runtime complexity of (O)(E + V). The algorithm finds the shortest path faster than DFS, only in the worst case the running time will be like that of DFS";
  const BFS_Img = `.\\images\\BFS_Img.png`;
  const BFS_LinkW = "https://en.wikipedia.org/wiki/Breadth-first_search";
  const BFS_LinkG4G = "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/";

  return (
    <>
      <div>
        <button onClick={() => props.changeDarkMode()}>Dark mode on/off</button>
        <h2>Algorithms</h2>
        <p>The main algorithms used in the game</p>
      </div>
      <AlgoCard
        name="Binary Space Partitioning"
        info={BSP_Info}
        ImgSrc={BSP_Img}
        LinkWiki={BSP_LinkW}
        LinkG4G ={BSP_LinkG4G}
      />
      <AlgoCard
        name="A*"
        info={AStar_Info}
        ImgSrc={AStar_Img}
        LinkWiki={AStar_LinkW}
        LinkG4G ={AStar_LinkG4G}
      />
      <AlgoCard
        name="Breadth First Search"
        info={BFS_Info}
        ImgSrc={BFS_Img}
        LinkWiki={BFS_LinkW}
        LinkG4G={BFS_LinkG4G}
      />
      <button onClick={() => window.scrollTo(0, 0)}>Scroll to top</button>
    </>
  );
}

export default Algorithms;
