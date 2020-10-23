

class Map {

    constructor(building, floor){

        this.building = building;
        this.floor = floor;


        this.generateNodes(map, nodeMap);

    } // end constructor

    generateNodes(map, nodeMap){

        
    }

}





   //------------------------------------------------------------------------



class Node {

    constructor(x_coord, y_coord){
        this.vertices = [];
        this.x_coord = x_coord;
        this.y_coord = y_coord;

    }
    isEndNode(){

        return false;

    }
    //Note that getter methods are unnecessary if the variables are public.
    getX(){

        return this.x_coord;

    }
    getY(){

        return this.y_coord;

    }
    addVertex(node) {
        this.vertices.push(node);
    }
    getNumVertices() {
        return this.vertices.length;
    }
}

class EndNode extends Node {

    constructor(x_coord, y_coord, name){
        super(x_coord, y_coord);
        this.name = name;

    }
    isEndNode(){

        return true;

    }
    getName(){

        return name;

    }

}
//---------------------------------------------------

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
        var q = new QElement(element, priority);

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
        var index = null;
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
            var u = this.priorityQueue.dequeue().element;
            var uIndex = this.nodes.indexOf(u);
            if (uIndex == -1)
                throw "Pathfinder: element from priority queue is not in the array of nodes.";

            console.log("Current node is at " + u.x_coord + ' ' + u.y_coord);

            for (var i = 0; i < u.vertices.length; i++) {
                var v = u.vertices[i];
                var vIndex = this.nodes.indexOf(v);
                if (vIndex == -1)
                    throw "Pathfinder: missing vertex node.";

                // Make sure the vertex has not been visited yet
                if (!this.visited.includes(v)) {
                    console.log("Examining vertex at " + v.x_coord + ' ' + v.y_coord);
                    // Calculate distance b/w Nodes u and v
                    var dist = this.distances[uIndex] + this.distanceBetween(u, v);

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

        var path = [];
        var current = endNode;
        while (current != null) {
            path.push(current);
            current = this.previous[this.nodes.indexOf(current)];
        }
        return path;
    }

}


//---------------------------------------------------
class Floor {

    constructor(){


    }




}

let searchroomid = document.getElementById('searchroomid').value;
//console.log(searchroomid);
let testroomid;

class Search {

    constructor()
    {

    }

    vaildinput()
    {

    }
}


//put this in the main class
let mainSearch = new Search();

document.querySelector("#searchbutton").addEventListener('click',  function () {
  document.querySelector("#searchroomid").addEventListener('keyup', (roomid) => {
      searchroomid = roomid.target.value.toLowerCase();
      //console.log(searchroomid); /*to see each character that is entered*/
    })
    console.log(searchroomid);
});




let nodes = [];
nodes[0] = new EndNode(66, 366, "Front Entrance");
nodes[1] = new Node(160, 371);
nodes[2] = new Node(171,484);
nodes[3] = new Node(231,371);
nodes[4] = new Node(370,416);
nodes[5] = new Node(380,480);
nodes[6] = new Node(349,476);
nodes[7] = new EndNode(365,652,"East Entrance");
nodes[8] = new EndNode(449,416,"Main Stairs");
nodes[9] = new EndNode(260,277,"Dean's Office");
nodes[10] = new Node(337,579);
nodes[11] = new EndNode(193,579,"Spahr Classroom");

nodes[0].addVertex(nodes[1]);
nodes[1].addVertex(nodes[0]);
nodes[1].addVertex(nodes[2]);
nodes[1].addVertex(nodes[3]);
nodes[2].addVertex(nodes[1]);
nodes[2].addVertex(nodes[11]);
nodes[3].addVertex(nodes[1]);
nodes[3].addVertex(nodes[4]);
nodes[3].addVertex(nodes[9]);
nodes[4].addVertex(nodes[3]);
nodes[4].addVertex(nodes[5]);
nodes[4].addVertex(nodes[8]);
nodes[5].addVertex(nodes[4]);
nodes[5].addVertex(nodes[6]);
nodes[5].addVertex(nodes[7]);
nodes[6].addVertex(nodes[5]);
nodes[6].addVertex(nodes[10]);
nodes[7].addVertex(nodes[5]);
nodes[8].addVertex(nodes[4]);
nodes[9].addVertex(nodes[3]);
nodes[10].addVertex(nodes[6]);
nodes[10].addVertex(nodes[11]);
nodes[11].addVertex(nodes[2]);
nodes[11].addVertex(nodes[10]);

let pather = new Pathfinder(nodes, nodes[9]);
let path = pather.getPathTo(nodes[11]);
console.log("Shortest path to Spahr is:");
while (path.length != 0) {
    var n = path.pop();
    console.log(n.x_coord + ' ' + n.y_coord);
}

//RUNTIME

let EatonBasement = new Map("Eaton","B");


