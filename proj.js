
class Map {
    // Initialize entire Node map
    constructor() {
        // Declaring buildings
        this.Eaton = new Building(4);

        // Declare all nodes for each building
        this.declareNodesEaton();

        // Make all connections between nodes for each building.
        this.setupConnectionsEaton();

    } // end constructor

    declareNodesEaton() {
        // Floor B
        let floorB = this.Eaton.floor[0].nodes;
        floorB[1] = new Node(160, 371);
        floorB[2] = new Node(171,484);
        floorB[3] = new Node(231,371);
        floorB[4] = new Node(370,416);
        floorB[5] = new Node(380,480);
        floorB[6] = new Node(349,476);
        floorB[10] = new Node(337,579);
        floorB[0] = new EndNode(66, 366, null, "Front Entrance");
        floorB[7] = new EndNode(365,652, null, "South Entrance");
        floorB[8] = new EndNode(449,416, null, "Stairs");
        floorB[9] = new EndNode(260,277, null, "Elevator");
        floorB[11] = new EndNode(193,579, 1006, "Spahr Classroom");
    } // end declareNodesEaton()

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
        floorB[3].addVertex(floorB[1]);
        floorB[3].addVertex(floorB[4]);
        floorB[3].addVertex(floorB[9]);
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
        floorB[10].addVertex(floorB[6]);
        floorB[10].addVertex(floorB[11]);
        floorB[11].addVertex(floorB[2]);
        floorB[11].addVertex(floorB[10]);
    } // end setupConnectionsEaton()
} // end class Map

class Building {
    constructor(numFloors) {
        // Initialize floors
        this.floor = [];
        for (var i = 0; i < numFloors; i++) {
            this.floor[i] = new Floor;
        }
    }
}

class Floor {
    constructor() {
        // Declare array for Nodes
        this.nodes = [];
    }
}

//------------------------------------Nodes------------------------------------
class Node {
    constructor(x_coord, y_coord){
        this.vertices = [];
        this.x_coord = x_coord;
        this.y_coord = y_coord;
    }

    // Adds the given node as a vertex which this Node connects to.
    addVertex(node) {
        this.vertices.push(node);
    }
}

class EndNode extends Node {

    // If EndNode has no roomNumber or name, set that parameter to null
    constructor(x_coord, y_coord, roomNumber, name){
        super(x_coord, y_coord);
        this.roomNumber = roomNumber;
        this.name = name;
    }
}

//-------------------------------------Pathfinder--------------------------------
class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

// Min Priority Queue
class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    // Add element to queue according to priority
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

    // Removes first element from queue and returns it.
    // Throws error if queue is empty.
    dequeue() {
        if (this.isEmpty())
            throw "PriorityQueue: Nothing to dequeue.";

        return this.queue.shift();
    }

    // Assigns the given element the given priority and repositions the element in the queue.
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
        console.log("Set distance of node at " + element.x_coord + ' ' + element.y_coord + " to " + priority);
    }

    // Returns true if the queue has no elements in it, false otherwise.
    isEmpty() {
        return (this.queue.length == 0);
    }
}


class Pathfinder {
    // nodesArray must be an array of Nodes. startNode can either be a reference to the Node or the Node's index in nodesArray.
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

    // Calculates the distance between two nodes
    distanceBetween(node1, node2) {
        return Math.sqrt( Math.pow(node1.x_coord - node2.x_coord, 2) + Math.pow(node1.y_coord - node2.y_coord, 2) );
    }

    dijkstra() {
        console.log("Started pathing for start node at index " + this.start);

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
            if (uIndex == -1)
                throw "Pathfinder: element from priority queue is not in the array of nodes.";

            console.log("Current node is at " + u.x_coord + ' ' + u.y_coord);

            for (var i = 0; i < u.vertices.length; i++) {
                let v = u.vertices[i];
                let vIndex = this.nodes.indexOf(v);
                if (vIndex == -1)
                    throw "Pathfinder: missing vertex node.";

                // Make sure the vertex has not been visited yet
                if (!this.visited.includes(v)) {
                    console.log("Examining vertex at " + v.x_coord + ' ' + v.y_coord);
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

document.querySelector("#searchbutton").addEventListener('click',  function () {
  searchroomid = document.getElementById('searchroomid').value;
  selectedfloor = document.getElementById('floor_level').value;
  startloaction = document.getElementById('starting_location').value;
  document.querySelector("#searchroomid").addEventListener('keyup', (roomid) => {
      searchroomid = roomid.target.value.toLowerCase();
      //console.log(searchroomid); /*to see each character that is entered*/
    })
    searchroomid = searchroomid.toLowerCase();// makes the input name lower case
    startloaction = startloaction.toLowerCase();// makes the start loaction name lower case
    //console.log(searchroomid);
    //console.log(startloaction);

    let inputnodenumber = floorGsearch.returnnodelocation(searchroomid);
    let startnodenumber = floorGsearch.returnnodelocation(startloaction);
    //console.log(inputnodenumber);
    //console.log(startnodenumber);

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
    //console.log(floornumber);

    console.log(searchroomid);
    if (floorGsearch.vaildinput(searchroomid) == true)//need to work on correct vaildinput
    {
      if (floorGsearch.vaildinput(startloaction) == true)
      {
        let pather = new Pathfinder(map.Eaton.floor[floornumber].nodes, map.Eaton.floor[floornumber].nodes[startnodenumber]);
        let path = pather.getPathTo(map.Eaton.floor[floornumber].nodes[inputnodenumber]);
        console.log("Shortest path to Spahr is:");
        while (path.length != 0) {
            let n = path.pop();
            console.log(n.x_coord + ' ' + n.y_coord);
        }
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

});

let map = new Map;

//testing search
let floorGsearch = new Search(map.Eaton.floor[0].nodes);
//let floor1search = new Search(map.Eaton.floor[1].nodes);
//let floor2search = new Search(map.Eaton.floor[2].nodes);
//let floor3search = new Search(map.Eaton.floor[3].nodes);


// Testing pathing
let pather = new Pathfinder(map.Eaton.floor[0].nodes, map.Eaton.floor[0].nodes[9]);
let path = pather.getPathTo(map.Eaton.floor[0].nodes[11]);
console.log("Shortest path to Spahr is:");
while (path.length != 0) {
    let n = path.pop();
    console.log(n.x_coord + ' ' + n.y_coord);
}
