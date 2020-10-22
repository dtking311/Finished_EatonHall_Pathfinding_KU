

class Map {

    constructor(name, level, resolution){
 
     this.name = name;
     this.level = level;
     this.resolution = resolution;


     let nodeMap = new Array(resolution);                          //    -- This is 2D array for holding Nodes  (Not all numbers)
     let map = new Array(resolution);                              //    -- This is 2D array for Displaying Info in HTML (All numbers)

     for (let i = 0 ; i < (this.resolution) ; i++ ){             
     
         map[i] = new Array(parseInt(1 * resolution));
         nodeMap[i] = new Array(parseInt(1 * resolution));
     
     }
     for (let x = 0; x < this.resolution; x++) {                     //    -- Initialize all indexes
         for (let y = 0; y < parseInt(1 * this.resolution); y++) { 
       
             map[x][y] = '0'; 
             nodeMap[x][y] = null;
         } 
     } 


     this.nodeMap = nodeMap;
 





     //------------------- Enter Path Data -------------------          this part could be strongly improved.
     



     
     map[47][15] = 2;
     map[62][17] = 2;
     map[47][43] = 2;

     
     this.drawHoriz(map, 16, 43, 47);
     this.drawVert(map, 48, 61, 17);
     

     


     //----------------------------------------------------             to here






     this.generateNodes(map, nodeMap);
     this.htmlMap(map);
 
    }
    drawHoriz(map, from, to, horizontal_cord){

        map[horizontal_cord].fill(1, from, to);

    }
    drawVert(map, from, to, horizontal_cord){

        for(let i = from; i <= to; i++){

            map[i][horizontal_cord] = 1;
    
         }

    }
    checkNode(x,y){

        if (this.nodeMap[x][y] == null){

            return false;

        } else {

            return true;

        }

    }
    getNode(x,y){

        if (this.checkNode(x,y) == false){

            return;

        } else {

        return (this.nodeMap[x][y]);

        }

    }
   
    generateNodes(map, nodeMap){


        for ( let x = 0 ; x < this.resolution ; x++ ) {
            for ( let y = 0 ; y < parseInt(1 * this.resolution) ; y++ ) {
               
                if(map[x][y] == "1"){

                    nodeMap[x][y] = new Node(x,y);
                    console.log("Node created");

                } else if(map[x][y] == "2"){

                    console.log("EndNode created");
                    nodeMap[x][y] = new EndNode(x,y,"default");         //we will need to figure out how to name them later
                                                                 // could create a list of endnodes with names at certain coords and check

                } else {

                    //

                }
                

            }
        }
            
          
        
    }
    htmlMap(map){
 
         console.log(this.resolution);  //diag
 
         let htmltable = document.createElement("table");
 
         for ( let x = 0 ; x < this.resolution ; x++ ) {
 
             let row = document.createElement("tr");
 
             for ( let y = 0 ; y < parseInt(1 * this.resolution) ; y++ ) {
                
                 if(map[x][y] == '1'){

                   
                    let cell = document.createElement("td");
                    cell.textContent = map[x][y];
                    cell.bgColor = "#0051BA";
                    cell.opacity = 25;

                    

                    row.appendChild(cell);

                 } else if(map[x][y] == '2'){

                   
                    let cell = document.createElement("td");
                    cell.textContent = map[x][y];
                    cell.bgColor = "#E8000D;";
                    cell.opacity = 25;

                    

                    row.appendChild(cell);

                 } else {


                    let cell = document.createElement("td");
                    cell.textContent = '0';
                    //cell.bgColor = "Clear";
                    cell.opacity = 0;

                    row.appendChild(cell);


                 }
                 
             }
             htmltable.appendChild(row);
         }
             
            

            document.getElementById("HTMLmap").append(htmltable);
         
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

class Search {

    constructor(){

        
    }






}










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

let EatonBasement = new Map("Eaton","Basement",100);




//testing       --good!

let justTestingVariable10 = EatonBasement.checkNode(47, 15);        //known Endnode

if (justTestingVariable10 == true){

let justTestingVariable11 = EatonBasement.getNode(47, 15);

console.log("11: isEndNode:" +justTestingVariable11.isEndNode());

}

let justTestingVariable20 = EatonBasement.checkNode(47, 16);        //known node

if (justTestingVariable20 == true){

let justTestingVariable21 = EatonBasement.getNode(47, 16);

console.log("21: isEndNode:" +justTestingVariable21.isEndNode());

}

let justTestingVariable30 = EatonBasement.checkNode(99, 99);        //known null

if (justTestingVariable30 == true){

let justTestingVariable31 = EatonBasement.getNode(99, 99);

console.log("31: isEndNode:" +justTestingVariable31.isEndNode());

}




