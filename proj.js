
/**
 * Class representing the entire node map.
 */
class Map {
    
    /**
     * Initializes the entire node map
     */
    constructor() {
        // Declaring buildings
        this.Eaton = new Building(4);

        // Declare all nodes for each building
        this.declareNodesEaton();

        // Make all connections between nodes for each building.
        this.setupConnectionsEaton();

    } // end constructor

    /**
     * Declares all of the nodes for Eaton.
     */
    declareNodesEaton() {
        // Floor B
        let floorB = this.Eaton.floor[0].nodes;
        
        //Nodes to travel through
        floorB[1] = new Node(160, 371);
        floorB[2] = new Node(171, 484);
        floorB[3] = new Node(231, 371);
        floorB[4] = new Node(370, 416);
        floorB[6] = new Node(349, 476);
        floorB[10] = new Node(337, 579);
        floorB[15] = new Node(300, 659);
        floorB[18] = new Node(260, 285);
        floorB[19] = new Node(273, 230);
        floorB[20] = new Node(268, 180);
        floorB[21] = new Node(321, 175);
        floorB[22] = new Node(371, 175);
        floorB[23] = new Node(419, 175);
        floorB[24] = new Node(434, 120);
        floorB[25] = new Node(414, 120);
        floorB[26] = new Node(343, 120);
        floorB[27] = new Node(323, 120);
        floorB[28] = new Node(300, 96);
        floorB[29] = new Node(275, 96);
        floorB[30] = new Node(257, 96);
        floorB[32] = new Node(189, 120);
        floorB[44] = new Node(230, 110);
        
        //Destination Nodes
        floorB[0] = new EndNode(85, 366, null, "Front Entrance");
        floorB[5] = new EndNode(380, 480, 10, "3");
        floorB[7] = new EndNode(365, 652, null, "East Entrance");
        floorB[8] = new EndNode(449, 416, null, "Stairs");
        floorB[9] = new EndNode(240, 315, 1, "Deans Office");
        floorB[13] = new EndNode(240, 315, null, "Dean's Office");
        floorB[11] = new EndNode(183, 560, 1006, "Spahr Classroom");
        floorB[12] = new EndNode(183, 560, null, "2");
        floorB[14] = new EndNode(380, 379, null, "Elevator"); 
        floorB[16] = new EndNode(265, 705, null, "2A"); 
        floorB[17] = new EndNode(265, 705, null, "2A1"); 
        floorB[31] = new EndNode(248, 140, null, "1B");
        floorB[33] = new EndNode(194, 263, null, "1A"); 
        floorB[34] = new EndNode(321, 240, null, "1L"); 
        floorB[35] = new EndNode(372, 240, null, "1K"); 
        floorB[36] = new EndNode(419, 270, null, "1J"); 
        floorB[37] = new EndNode(433, 69, null, "1F"); 
        floorB[38] = new EndNode(414, 69, null, "1E"); 
        floorB[39] = new EndNode(343, 69, null, "1D"); 
        floorB[40] = new EndNode(322, 69, null, "1C"); 
        floorB[41] = new EndNode(275, 109, null, "1B3"); 
        floorB[42] = new EndNode(256, 69, null, "1B2"); 
        floorB[43] = new EndNode(189, 82, null, "1B1");                
    } //end declareNodesEaton()

    /**
     * Creates all connections between the nodes in Eaton.
     */
    setupConnectionsEaton() {
        let floorB = this.Eaton.floor[0].nodes;
        let floor1 = this.Eaton.floor[1].nodes;
        let floor2 = this.Eaton.floor[2].nodes;
        let floor3 = this.Eaton.floor[3].nodes;

        // Floor B
        floorB[0].addVertex(floorB[1]);
        floorB[1].addVertex(floorB[0]);
        floorB[1].addVertex(floorB[2]);
        floorB[1].addVertex(floorB[3]);
        floorB[2].addVertex(floorB[1]);
        floorB[2].addVertex(floorB[11]);
        floorB[2].addVertex(floorB[12]); 
        floorB[3].addVertex(floorB[1]);
        floorB[3].addVertex(floorB[4]);
        floorB[3].addVertex(floorB[9]);
        floorB[3].addVertex(floorB[13]);     
        floorB[4].addVertex(floorB[3]);
        floorB[4].addVertex(floorB[5]);
        floorB[4].addVertex(floorB[8]);
        floorB[5].addVertex(floorB[4]);
        floorB[5].addVertex(floorB[6]);
        floorB[5].addVertex(floorB[7]);
        floorB[6].addVertex(floorB[5]);
        floorB[6].addVertex(floorB[10]);
        floorB[7].addVertex(floorB[5]);
        floorB[8].addVertex(floorB[4]);
        floorB[9].addVertex(floorB[3]);
        floorB[9].addVertex(floorB[18]);
        floorB[10].addVertex(floorB[6]);
        floorB[10].addVertex(floorB[11]);
        floorB[10].addVertex(floorB[12]);
        floorB[10].addVertex(floorB[15]);  
        floorB[11].addVertex(floorB[2]);
        floorB[11].addVertex(floorB[10]);
        floorB[12].addVertex(floorB[2]);
        floorB[12].addVertex(floorB[10]);
        floorB[13].addVertex(floorB[3]);
        floorB[13].addVertex(floorB[18]);
        floorB[14].addVertex(floorB[3]);
        floorB[14].addVertex(floorB[4]);
        floorB[15].addVertex(floorB[10]);
        floorB[15].addVertex(floorB[16]);
        floorB[15].addVertex(floorB[17]);
        floorB[16].addVertex(floorB[15]);
        floorB[17].addVertex(floorB[15]);
        floorB[18].addVertex(floorB[9]);
        floorB[18].addVertex(floorB[13]);
        floorB[18].addVertex(floorB[33]);
        floorB[18].addVertex(floorB[19]);
        floorB[19].addVertex(floorB[18]);
        floorB[19].addVertex(floorB[20]);
        floorB[19].addVertex(floorB[21]);
        floorB[20].addVertex(floorB[19]);
        floorB[20].addVertex(floorB[31]);
        floorB[21].addVertex(floorB[19]);
        floorB[21].addVertex(floorB[34]);
        floorB[21].addVertex(floorB[27]);
        floorB[21].addVertex(floorB[26]);
        floorB[21].addVertex(floorB[22]);
        floorB[21].addVertex(floorB[24]);
        floorB[22].addVertex(floorB[21]);
        floorB[22].addVertex(floorB[35]);
        floorB[22].addVertex(floorB[23]);
        floorB[22].addVertex(floorB[25]);
        floorB[22].addVertex(floorB[26]);
        floorB[22].addVertex(floorB[27]);
        floorB[23].addVertex(floorB[22]);
        floorB[23].addVertex(floorB[36]);
        floorB[23].addVertex(floorB[24]);
        floorB[23].addVertex(floorB[25]);
        floorB[23].addVertex(floorB[26]);
        floorB[24].addVertex(floorB[23]);
        floorB[24].addVertex(floorB[25]);
        floorB[24].addVertex(floorB[21]);
        floorB[24].addVertex(floorB[37]);
        floorB[25].addVertex(floorB[38]);
        floorB[25].addVertex(floorB[24]);
        floorB[25].addVertex(floorB[23]);
        floorB[25].addVertex(floorB[22]);
        floorB[25].addVertex(floorB[21]);
        floorB[25].addVertex(floorB[26]);
        floorB[26].addVertex(floorB[39]);
        floorB[26].addVertex(floorB[25]);
        floorB[26].addVertex(floorB[23]);
        floorB[26].addVertex(floorB[22]);
        floorB[26].addVertex(floorB[21]);
        floorB[26].addVertex(floorB[27]);
        floorB[26].addVertex(floorB[28]);
        floorB[27].addVertex(floorB[40]);
        floorB[27].addVertex(floorB[26]);
        floorB[27].addVertex(floorB[22]);
        floorB[27].addVertex(floorB[21]);
        floorB[27].addVertex(floorB[28]);
        floorB[28].addVertex(floorB[27]);
        floorB[28].addVertex(floorB[26]);
        floorB[28].addVertex(floorB[21]);
        floorB[28].addVertex(floorB[29]);
        floorB[29].addVertex(floorB[41]);
        floorB[29].addVertex(floorB[28]);
        floorB[29].addVertex(floorB[30]);
        floorB[30].addVertex(floorB[42]);
        floorB[30].addVertex(floorB[29]);
        floorB[30].addVertex(floorB[44]);
        floorB[31].addVertex(floorB[44]);
        floorB[31].addVertex(floorB[32]);
        floorB[31].addVertex(floorB[20]);
        floorB[32].addVertex(floorB[43]);
        floorB[32].addVertex(floorB[44]);
        floorB[33].addVertex(floorB[18]);
        floorB[34].addVertex(floorB[21]);
        floorB[35].addVertex(floorB[22]);
        floorB[36].addVertex(floorB[23]);
        floorB[37].addVertex(floorB[24]);
        floorB[38].addVertex(floorB[25]);
        floorB[39].addVertex(floorB[26]);
        floorB[40].addVertex(floorB[27]);
        floorB[41].addVertex(floorB[29]);
        floorB[42].addVertex(floorB[30]);
        floorB[43].addVertex(floorB[32]);
        floorB[44].addVertex(floorB[31]);
        floorB[44].addVertex(floorB[30]);
        floorB[44].addVertex(floorB[32]);
    } // end setupConnectionsEaton()

} // end class Map

/**
 * Represents a building in the node map.
 */
class Building {

    /**
     * Creates a building with the specified number of Floors.
     * @param {number} numFloors - The number of Floors to put in the Building.
     */
    constructor(numFloors) {
        // Initialize floors
        this.floor = [];
        for (var i = 0; i < numFloors; i++) {
            this.floor[i] = new Floor;
        }
    }
} // end class Building

/**
 * Represents a floor of a building in the node map. Contains the nodes of the node map.
 */
class Floor {

    /**
     * Creates a floor and initializes the nodes array.
     */
    constructor() {
        // Declare array for Nodes
        this.nodes = [];
    }
} // end class Floor

//------------------------------------Nodes------------------------------------

/**
 * Represents a vertex in the node map
 */
class Node {
    
    /**
     * Creates a Node.
     * @param {number} x_coord - The x-coordinate to place the Node at.
     * @param {number} y_coord - The y-coordinate to place the Node at.
     */
    constructor(x_coord, y_coord){
        this.vertices = [];
        this.x_coord = x_coord;
        this.y_coord = y_coord;
    }

    /**
     * Adds the given node as a vertex which this Node connects to.
     * @param {Node} node - The Node to add to this Node's vertices.
     */
    addVertex(node) {
        this.vertices.push(node);
    }
} // end class Node

/**
 * Represents a destination or an important location in the node map.
 * @extends Node
 */
class EndNode extends Node {

    // If EndNode has no roomNumber or name, set that parameter to null
    /**
     * Creates an EndNode.
     * @param {number} x_coord - The x-coordinate to place the EndNode at.
     * @param {number} y_coord - The y-coordinate to place the EndNode at.
     * @param {number} roomNumber - The number of the room the EndNode is associated with. If none, pass null for this param.
     * @param {string} name - The name of the location the EndNode is associated with. If none, pass null for this param.
     */
    constructor(x_coord, y_coord, roomNumber, name){
        super(x_coord, y_coord);
        this.roomNumber = roomNumber;
        this.name = name;
    }
} // end class EndNode

//-------------------------------------Pathfinder--------------------------------

/**
 * Represents an element in the Priority Queue.
 */
class QElement {

    /**
     * Creates a QElement.
     * @param element - The thing to store in the queue.
     * @param {number} priority - The priority of the thing in the queue.
    */
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
} // end class QElement

/**
 * Represents a minimum priority queue.
 */
class PriorityQueue {

    /**
     * Creates a PriorityQueue.
     */
    constructor() {
        this.queue = [];
    }

    /**
     * Adds given element to queue according to specified priority.
     * @param element - The thing to store in the queue.
     * @param {number} priority - The priority of the thing in the queue.
     */
    enqueue(element, priority) {
        // create queue element from parameters
        let q = new QElement(element, priority);

        for (var i = 0; i < this.queue.length; i++) {

            if (q.priority <= this.queue[i].priority) {
                this.queue.splice(i, 0, q);
                return;
            }
        }
        // q had greater priority than all other elements in queue
        this.queue.push(q);
    }

    /**
     * Removes first element from queue and returns it.
     * @throw Throws error if queue is empty.
     * @return The element of the queue with least priority value.
     */
    dequeue() {
        if (this.isEmpty())
            throw "PriorityQueue: Nothing to dequeue.";

        return this.queue.shift();
    }

    /**
     * Assigns the given element the specified priority and repositions the element in the queue.
     * @param element - The element int the queue whose priority is to be changed.
     * @param {number} priority - The new priority of the element.
     * @throw Throws error if the queue is empty.
     * @throw Throws error if the element cannot be found in the queue.
     */
    reprioritizeElement(element, priority) {
        // Find index of the given element in the queue
        let index = null;
        for (var i = 0; i < this.queue.length; i++) {
            if (this.queue[i].element === element) {
                index = i;
                break;
            }
        }

        if (index == null)
            throw "PriorityQueue: cannot reprioritize element not in queue.";

        this.queue.splice(index, 1); // Removing the old element
        this.enqueue(element, priority); // Adding the element again with new priority
        //console.log("Set distance of node at " + element.x_coord + ' ' + element.y_coord + " to " + priority);
    }

    /**
     * @return True if the queue has no elements in it, false otherwise.
     */
    isEmpty() {
        return (this.queue.length == 0);
    }
} // end class PriorityQueue

/**
 * Will find the shortest path between a given start node and any other location in the node map.
 */
class Pathfinder {

    /**
     * Creates a Pathfinder.
     * @param {Node[]} nodesArray - The array that contains the node map.
     * @param {Node|number} startNode - A Node or the node's index in nodeArray. This is the place where all paths begin.
     * @throw error if either of the parameters have the wrong type.
     * @throw error if startNode is not in the array.
     */
    constructor(nodesArray, startNode){
        if (nodesArray instanceof Array)
            this.nodes = nodesArray;
        else
            throw "Pathfinder: nodesArray must be an array.";

        if (startNode instanceof Node) {
            // startNode is a Node. Check to make sure it exists in nodesArray.
            if (this.nodes.indexOf(startNode) == -1)
                throw "Pathfinder: startNode is not in nodesArray.";
            else
                this.start = this.nodes.indexOf(startNode);
        } else if (startNode instanceof Number) {
            // startNode is a Number. Check to make sure it is the index of a Node in nodesArray.
            if (this.nodes[startNode] instanceof Node)
                this.start = startNode;
            else
                throw "Pathfinder: startNode is not the index of a Node in nodesArray.";
        } else
            throw "Pathfinder: invalid type given for startNode.";

        // Initialize remaining member variables
        this.priorityQueue = new PriorityQueue;
        this.distances = []
        this.previous = []
        this.visited = []

        this.dijkstra();
    }

    /**
     * Calculates the distance between two nodes.
     * @param {Node} node1
     * @param {Node} node2
     * @return {number} The distance between the two nodes.
    */
    distanceBetween(node1, node2) {
        return Math.sqrt( Math.pow(node1.x_coord - node2.x_coord, 2) + Math.pow(node1.y_coord - node2.y_coord, 2) );
    }

    /**
     * Dijkstra's shortest path algorithm.
     * @throw error if a vertex is missing.
     */
    dijkstra() {
        //console.log("Started pathing for start node at index " + this.start);

        // Set distance of start to 0
        this.distances[this.start] = 0;

        // Initialize other variables for pathing
        for (var i = 0; i < this.nodes.length; i++) {
            if (i != this.start)
                this.distances[i] = Infinity;
            this.previous[i] = null;
            this.priorityQueue.enqueue(this.nodes[i], this.distances[i]);
        }

        // Start doing the pathing
        while (!this.priorityQueue.isEmpty()) {
            // get min Node from queue
            let u = this.priorityQueue.dequeue().element;
            let uIndex = this.nodes.indexOf(u);

            //console.log("Current node is at " + u.x_coord + ' ' + u.y_coord);

            for (var i = 0; i < u.vertices.length; i++) {
                let v = u.vertices[i];
                let vIndex = this.nodes.indexOf(v);
                if (vIndex == -1)
                    throw "Pathfinder: missing vertex node.";

                // Make sure the vertex has not been visited yet
                if (!this.visited.includes(v)) {
                    //console.log("Examining vertex at " + v.x_coord + ' ' + v.y_coord);
                    // Calculate distance b/w Nodes u and v
                    let dist = this.distances[uIndex] + this.distanceBetween(u, v);

                    if (dist < this.distances[vIndex]) {
                        this.distances[vIndex] = dist;
                        this.previous[vIndex] = u;
                        this.priorityQueue.reprioritizeElement(v, dist);
                    }
                }
            }
            this.visited.push(u);
        }
    }

    /**
     * Determines the path between the start node given to the constructor and the specified end node.
     * @param {Node} endNode - The destination.
     * @throw error if the parameter is not of the correct type.
     * @return {Node[]} The path from start to destination. Progressively calling pop() on the array will give the nodes in the proper order.
     */
    getPathTo(endNode) {
        if (endNode instanceof Node == false)
            throw "Pathfinder: endNode must be a Node.";

        let path = [];
        let current = endNode;
        while (current != null) {
            path.push(current);
            current = this.previous[this.nodes.indexOf(current)];
        }
        return path;
    }
}

//-----------------------------------Search--------------------------------------
class Search {

    constructor(nodesArray_search)
    {
      if (nodesArray_search instanceof Array)
          this.nodes = nodesArray_search;
      else
          throw "Search: nodesArray_search must be an array.";
    }

    vaildinput(searchRoom)
    {
      for (let i = 0; i < this.nodes.length; i++) {

        let searching_room_name = this.nodes[i].name;
        let searching_room_number = this.nodes[i].roomNumber;
        if (searching_room_name != undefined)
        {
          searching_room_name = searching_room_name.toLowerCase();// makes the node names all lower case
        }
        //console.log(searching_room); /* printes every name of a node if they have one*/
          if (searching_room_number != null && searching_room_number == searchRoom)
          {
            return true;
          }
          if (searchRoom == searching_room_name )
          {
            return true;
          }
        }
        return false;
    }

    returnnodelocation(searchRoom)
    {
      for (let i = 0; i < this.nodes.length; i++) {

        let searching_room_name = this.nodes[i].name;
        let searching_room_number = this.nodes[i].roomNumber;
        if (searching_room_name != undefined)
        {
          searching_room_name = searching_room_name.toLowerCase();// makes the node names all lower case
        }
        //console.log(searching_room); /* printes every name of a node if they have one*/
          if (searching_room_number != null && searching_room_number == searchRoom)
          {
            return(i);
          }
          if (searchRoom == searching_room_name )
          {
            return(i);
          }
        }
        return(-1);
    }
}

//-----------------------------------Runtime-------------------------------------
let searchroomid = document.getElementById('searchroomid').value;
let selectedfloor = document.getElementById('floor_level').value;
let startloaction = document.getElementById('starting_location').value;
let moreThanOnce = 0;
let targetDiv = document.getElementById('Eaton_g_floor_svg');
let svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgNode.setAttributeNS(null, "id", "createdPath");

document.querySelector("#searchbutton").addEventListener('click',  function () {
  if (moreThanOnce > 0)
  {
    let createdPath = document.getElementById('createdPath');
    targetDiv.removeChild(createdPath);
    svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgNode.setAttributeNS(null, "id", "createdPath");
  }
  targetDiv.appendChild(svgNode);
  searchroomid = document.getElementById('searchroomid').value;
  selectedfloor = document.getElementById('floor_level').value;
  startloaction = document.getElementById('starting_location').value;
  document.querySelector("#searchroomid").addEventListener('keyup', (roomid) => {
      searchroomid = roomid.target.value.toLowerCase();
    })
    searchroomid = searchroomid.toLowerCase();// makes the input name lower case
    startloaction = startloaction.toLowerCase();// makes the start loaction name lower case

    let inputnodenumber = floorGsearch.returnnodelocation(searchroomid);
    let startnodenumber = floorGsearch.returnnodelocation(startloaction);

    let floornumber = 0;
    switch (selectedfloor) {
      case "Ground Floor":
        floornumber = 0;
        break;
      case "Floor 1":
        floornumber = 1;
        break;
      case "Floor 2":
        floornumber = 2;
        break;
      case "Floor 3":
        floornumber = 3;
        break;
      default:
        floornumber = 0;
        break;
    }

    let test_Arr = [];
    if (floorGsearch.vaildinput(searchroomid) == true)
    {
      if (floorGsearch.vaildinput(startloaction) == true)
      {
        let pather = new Pathfinder(map.Eaton.floor[floornumber].nodes, map.Eaton.floor[floornumber].nodes[startnodenumber]);
        let path = pather.getPathTo(map.Eaton.floor[floornumber].nodes[inputnodenumber]);
        
        while (path.length != 0) {
            let n = path.pop();
            test_Arr.push(n.x_coord);
            test_Arr.push(n.y_coord);
        }

        let j = 0;
        let last_coords = [test_Arr[0], test_Arr[1]];
        for (let i = 0; i < test_Arr.length/2; ++i)
        {
            let tempNode = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            let tempLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            tempNode.setAttributeNS(null, 'cx', test_Arr[j]);
            tempLine.setAttributeNS(null, 'd', 'M' + last_coords[0] + ' ' + last_coords[1] + ' L' + test_Arr[j] + ' ' + test_Arr[j+1] + ' Z');
            j++;
            tempNode.setAttributeNS(null, 'cy', test_Arr[j]);
            j++;
            if (i == 0 || i == (test_Arr.length/2)-1)
            {
                tempNode.setAttributeNS(null, 'r', '10');
            }
            else
            {
                tempNode.setAttributeNS(null, 'r', '6');
            }
            if (i == 0)
            {
                tempNode.setAttributeNS(null, 'fill', 'red');
            }
            else
            {
                tempNode.setAttributeNS(null, 'fill', 'blue');
            }
            tempLine.setAttributeNS(null, 'stroke', 'blue');
            tempLine.setAttributeNS(null, 'stroke-width', '12');
            svgNode.appendChild(tempNode);
            svgNode.appendChild(tempLine);
            last_coords[0] = test_Arr[j-2];
            last_coords[1] = test_Arr[j-1];
        }

        //replaces the starting node so that the red is on top of the blue
        let tempNode = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        tempNode.setAttributeNS(null, 'cx', test_Arr[0]);
        tempNode.setAttributeNS(null, 'cy', test_Arr[1]);
        tempNode.setAttributeNS(null, 'r', '10');
        tempNode.setAttributeNS(null, 'fill', 'red');
        svgNode.appendChild(tempNode);
      }
      else
      {
        alert("not a valid start location")
      }
    }
    else
    {
      alert("not a valid input ")
    }
   moreThanOnce++;
});

let map = new Map;
let floorGsearch = new Search(map.Eaton.floor[0].nodes);