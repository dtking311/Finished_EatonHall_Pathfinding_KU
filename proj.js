

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

        this.x_coord = x_coord;
        this.y_coord = y_coord;

    }
    isEndNode(){


        return false;

    }
    isNode(){


        return true;

    }
}
class EndNode {

    constructor(x_coord, y_coord, name){

        this.x_coord = x_coord;
        this.y_coord = y_coord;
        this.name = name;

    }
    isEndNode(){

        return true;

    }
    isNode(){

        return true;

    }
    getName(){

        return name;

    }
    getX(){

        return this.x_coord;

    }
    getY(){

        return this.y_coord;

    }

}

















class Pathfinder {

    constructor(){


    }




}

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






//RUNTIME

let EatonBasement = new Map("Eaton","Basement",100);




//testing       --good!

let justTestingVariable10 = EatonBasement.checkNode(47, 15);        //known Endnode

if (justTestingVariable10 == true){

let justTestingVariable11 = EatonBasement.getNode(47, 15);

console.log("11: isNode:" + justTestingVariable11.isNode());
console.log("11: isEndNode:" +justTestingVariable11.isEndNode());

}

let justTestingVariable20 = EatonBasement.checkNode(47, 16);        //known node

if (justTestingVariable20 == true){

let justTestingVariable21 = EatonBasement.getNode(47, 16);

console.log("21: isNode:" +justTestingVariable21.isNode());
console.log("21: isEndNode:" +justTestingVariable21.isEndNode());

}

let justTestingVariable30 = EatonBasement.checkNode(99, 99);        //known null

if (justTestingVariable30 == true){

let justTestingVariable31 = EatonBasement.getNode(99, 99);

console.log("31: isNode:" +justTestingVariable31.isNode());
console.log("31: isEndNode:" +justTestingVariable31.isEndNode());

}
