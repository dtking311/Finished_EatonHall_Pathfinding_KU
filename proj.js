
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

        // Concatenate all of the node arrays into a single node map. This allows pathfinder to get between floors.
        // If this ends up working out, will need to add the other floors to the concat.
        this.nodeMap = this.Eaton.floor[0].nodes.concat(this.Eaton.floor[1].nodes);

    } // end constructor

    /**
     * Declares all of the nodes for Eaton.
     */
    declareNodesEaton() {
        // ------------Floor B---------------
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
        floorB[45] = new Node(120, 366);
        
        //Destination Nodes
        floorB[0] = new EndNode(85, 366, null, "Front Entrance");
        floorB[5] = new EndNode(380, 480, 10, "3");
        floorB[7] = new EndNode(365, 652, null, "East Entrance");
        floorB[8] = new EndNode(449, 416, null, "Stairs");
        floorB[9] = new EndNode(240, 315, 1, "Deans Office");
        floorB[13] = new EndNode(240, 315, null, "Dean's Office");
        floorB[11] = new EndNode(183, 560, 1006, "Spahr Classroom");
        floorB[12] = new EndNode(183, 560, null, "2");
        floorB[14] = new EndNode(380, 379, null, "BE01 Elevator"); 
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
        floorB[46] = new EndNode(120, 251, null, "BS01");

        // ----------Floor 1------------
        let floor1 = this.Eaton.floor[1].nodes;

        // some test nodes for pathing between floors
        floor1[0] = new EndNode(449, 416, null, "Stairs");
        floor1[1] = new Node(608, 461);
        floor1[2] = new Node(600, 386);
        floor1[3] = new Node(190, 386);
        floor1[4] = new EndNode(190, 338, 1001, "Engineering Career Center");
        floor1[5] = new Node(139, 261);
        floor1[6] = new Node(115, 261);
        floor1[7] = new Node(115, 339);
        floor1[8] = new EndNode(140, 339, null, "1S01");
        floor1[9] = new Node(140, 386);

        // ----------Floor 2-----------
        let floor2 = this.Eaton.floor[2].nodes;
        
        floor2[0] = new Node(120,220);
        floor2[1] = new Node(100,220);
        floor2[2] = new Node(100,286);
        floor2[3] = new EndNode(120,286, null, "2S01");
        floor2[4] = new Node(120,330);
        floor2[5] = new Node(170,330);
        floor2[6] = new Node(220,330);
        floor2[7] = new Node(290,330);
        floor2[8] = new Node(376,330);
        floor2[9] = new Node(475,330);
        floor2[10] = new Node(521,330);
        floor2[11] = new Node(752,330);
        floor2[12] = new Node(786,330);
        floor2[13] = new Node(898,330);
        floor2[14] = new Node(926,330);
        floor2[15] = new EndNode(1005,330, null, "Learned walkway");
        floor2[16] = new EndNode(926,377, null, "2S02");
        floor2[17] = new Node(953,377);
        floor2[18] = new Node(953,452);
        floor2[19] = new Node(926,452);
        floor2[20] = new Node(687,292);
        floor2[21] = new EndNode(619,297, null, "Computing Commons stairs");
        floor2[22] = new Node(786,385);
        floor2[23] = new EndNode(843,385, 2060, null);
        floor2[24] = new Node(898,385);
        floor2[25] = new EndNode(438,365, null, "2E01 Elevator");
        floor2[26] = new EndNode(521,365, 2010, null);
        floor2[27] = new Node(521,465);
        floor2[28] = new EndNode(450,465, null, "2002A");
        floor2[29] = new Node(376,465);
        floor2[30] = new EndNode(376,365, 2002, null);
        floor2[31] = new EndNode(245,241, 2001, "EECS Department");
        floor2[32] = new Node(245,207);
        floor2[33] = new EndNode(212,207, null, "2001B");
        floor2[34] = new Node(256,75);
        floor2[35] = new EndNode(188,75, null, "2001C");
        floor2[36] = new EndNode(256,48, null, "2001D");
        floor2[37] = new EndNode(273,48, null, "2001E");
        floor2[38] = new Node(273,75);
        floor2[39] = new Node(345,75);
        floor2[40] = new EndNode(336,58, null, "2001F");
        floor2[41] = new EndNode(353,98, null, "2001K");
        floor2[42] = new Node(398,75);
        floor2[43] = new Node(459,96);
        floor2[44] = new EndNode(457,50, null, "2001G");
        floor2[45] = new EndNode(477,50, null, "2001G1");
        floor2[46] = new EndNode(493,97, null, "2001H");
        floor2[47] = new Node(475,127);
        floor2[48] = new EndNode(451,127, null, "2001J");
        floor2[49] = new Node(475,187);
        floor2[50] = new EndNode(453,182, null, "2005A");
        floor2[51] = new EndNode(492,189, null, "2005B");
        floor2[52] = new EndNode(475,209, 2005, null);
        floor2[53] = new EndNode(492,209, null, "2005C");
        floor2[54] = new Node(475,266);
        floor2[55] = new EndNode(492,266, null, "2005D");
        floor2[56] = new Node(170,385);
        floor2[57] = new EndNode(192,385, 2011, null);
        floor2[58] = new EndNode(136,385, 2012, null);
        floor2[59] = new EndNode(136,419, 2014, null);
        floor2[60] = new EndNode(136,475, 2016, null);
        floor2[61] = new Node(170,430);
        floor2[62] = new EndNode(192,430, 2013, null);
        floor2[63] = new Node(170,475);
        floor2[64] = new EndNode(192,475, 2015, null);
        floor2[65] = new Node(170,517);
        floor2[66] = new EndNode(136,517, 2018, null);
        floor2[67] = new Node(170,541);
        floor2[68] = new Node(143,541);
        floor2[69] = new EndNode(143,561, 2022, null);
        floor2[70] = new Node(124,541);
        floor2[71] = new EndNode(124,561, 2020, null);
        floor2[72] = new Node(185,541);
        floor2[73] = new EndNode(185,561, 2024, null);
        floor2[74] = new Node(215,541);
        floor2[75] = new EndNode(215,521, 2025, null);
        floor2[76] = new Node(233,541);
        floor2[77] = new EndNode(233,561, 2026, null);
        floor2[78] = new Node(275,541);
        floor2[79] = new EndNode(275,561, 2028, null);
        floor2[80] = new Node(296,541);
        floor2[81] = new EndNode(296,521, 2027, null);
        floor2[82] = new Node(319,541);
        floor2[83] = new EndNode(319,561, 2030, null);
        floor2[84] = new Node(366,541);
        floor2[85] = new EndNode(366,521, 2029, null);
        floor2[86] = new EndNode(366,561, 2032, null);
        floor2[87] = new Node(408,541);
        floor2[88] = new EndNode(408,561, 2034, null);
        floor2[89] = new Node(452,541);
        floor2[90] = new EndNode(452,561, 2036, null);
        floor2[91] = new Node(497,541);
        floor2[92] = new EndNode(497,561, 2038, null);
        floor2[93] = new Node(540,541);
        floor2[94] = new EndNode(540,561, 2040, null);
        floor2[95] = new Node(557,541);
        floor2[96] = new EndNode(557,521, 2041, null);
        floor2[97] = new Node(583,541);
        floor2[98] = new EndNode(583,561, 2042, null);
        floor2[99] = new Node(630,541);
        floor2[100] = new EndNode(630,521, 2043, null);
        floor2[101] = new EndNode(630,561, 2044, null);
        floor2[102] = new Node(676,541);
        floor2[103] = new EndNode(676,561, 2046, null);
        floor2[104] = new Node(706,541);
        floor2[105] = new EndNode(706,521, 2045, null);
        floor2[106] = new Node(728,541);
        floor2[107] = new EndNode(728,561, 2048, null);
        floor2[108] = new Node(752,541);
        floor2[109] = new Node(787,541);
        floor2[110] = new EndNode(787,561, 2050, null);
        floor2[111] = new Node(828,541);
        floor2[112] = new EndNode(828,561, 2052, null);
        floor2[113] = new Node(873,541);
        floor2[114] = new EndNode(873,561, 2054, null);
        floor2[115] = new Node(290,280);
        floor2[116] = new EndNode(332,280, 2003, null);
        floor2[117] = new Node(376,280);
        
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
        floorB[0].vertices = [ floorB[45] ];
        floorB[1].vertices = [ floorB[45], floorB[2], floorB[3] ];
        floorB[2].vertices = [ floorB[1], floorB[11], floorB[12] ];
        floorB[3].vertices = [ floorB[1], floorB[4], floorB[9], floorB[13] ];
        floorB[4].vertices = [ floorB[3], floorB[5], floorB[8] ];   
        floorB[5].vertices = [ floorB[4], floorB[6], floorB[7] ];
        floorB[6].vertices = [ floorB[5], floorB[10] ];
        floorB[7].vertices = [ floorB[5] ];
        floorB[8].vertices = [ floorB[4] ];
        floorB[9].vertices = [ floorB[3], floorB[18] ];
        floorB[10].vertices = [ floorB[6], floorB[11], floorB[12], floorB[15] ];
        floorB[11].vertices = [ floorB[2], floorB[10] ];
        floorB[12].vertices = [ floorB[2], floorB[10] ];
        floorB[13].vertices = [ floorB[3], floorB[18] ];
        floorB[14].vertices = [ floorB[3], floorB[4] ];
        floorB[15].vertices = [ floorB[10], floorB[16], floorB[17] ];
        floorB[16].vertices = [ floorB[15] ];
        floorB[17].vertices = [ floorB[15] ];
        floorB[18].vertices = [ floorB[9], floorB[13], floorB[19], floorB[33] ];
        floorB[19].vertices = [ floorB[18], floorB[20], floorB[21] ];
        floorB[20].vertices = [ floorB[19], floorB[31] ];
        floorB[21].vertices = [ floorB[19], floorB[22], floorB[24], floorB[26], floorB[27], floorB[34] ];
        floorB[22].vertices = [ floorB[21], floorB[23], floorB[25], floorB[26], floorB[27], floorB[35] ];
        floorB[23].vertices = [ floorB[22], floorB[24], floorB[25], floorB[26], floorB[36] ];
        floorB[24].vertices = [ floorB[21], floorB[23], floorB[25], floorB[37] ];
        floorB[25].vertices = [ floorB[38], floorB[24], floorB[23], floorB[22], floorB[21], floorB[26] ];
        floorB[26].vertices = [ floorB[39], floorB[25], floorB[23], floorB[22], floorB[21], floorB[27], floorB[28] ];
        floorB[27].vertices = [ floorB[40], floorB[26], floorB[22], floorB[21], floorB[28] ];
        floorB[28].vertices = [ floorB[27], floorB[26], floorB[21], floorB[29] ];
        floorB[29].vertices = [ floorB[41], floorB[28], floorB[30] ];
        floorB[30].vertices = [ floorB[42], floorB[29], floorB[44] ];
        floorB[31].vertices = [ floorB[44], floorB[32], floorB[20] ];
        floorB[32].vertices = [ floorB[43], floorB[44] ];
        floorB[33].vertices = [ floorB[18] ];
        floorB[34].vertices = [ floorB[21] ];
        floorB[35].vertices = [ floorB[22] ];
        floorB[36].vertices = [ floorB[23] ];
        floorB[37].vertices = [ floorB[24] ];
        floorB[38].vertices = [ floorB[25] ];
        floorB[39].vertices = [ floorB[26] ];
        floorB[40].vertices = [ floorB[27] ];
        floorB[41].vertices = [ floorB[29] ];
        floorB[42].vertices = [ floorB[30] ];
        floorB[43].vertices = [ floorB[32] ];
        floorB[44].vertices = [ floorB[31], floorB[30], floorB[32] ];
        floorB[45].vertices = [ floorB[0], floorB[1], floorB[46] ];
        floorB[46].vertices = [ floorB[45], floor1[5] ];

        floorB[8].vertices.push(floor1[0]); // temp connection between floors

        // Floor 1
        floor1[0].vertices = [ floorB[8], floor1[1] ];
        floor1[1].vertices = [ floor1[0], floor1[2] ];
        floor1[2].vertices = [ floor1[1], floor1[3] ];
        floor1[3].vertices = [ floor1[2], floor1[4], floor1[9] ];
        floor1[4].vertices = [ floor1[3] ];
        floor1[5].vertices = [ floorB[46], floor1[6] ];
        floor1[6].vertices = [ floor1[5], floor1[7] ];
        floor1[7].vertices = [ floor1[6], floor1[8] ];
        floor1[8].vertices = [ floor1[7], floor1[9] ];
        floor1[9].vertices = [ floor1[8], floor1[3] ];

        // Floor 2
        floor2[0].vertices = [ /* floor1 stairwell 01 */, floor2[1] ];
        floor2[1].vertices = [ floor2[0], floor2[2] ];
        floor2[2].vertices = [ floor2[1], floor2[3] ];
        floor2[3].vertices = [ floor2[2], floor2[4], /* floor3 stairwell 01 */ ];
        floor2[4].vertices = [ floor2[3], floor2[5] ];
        floor2[5].vertices = [ floor2[4], floor2[6], floor2[56] ];
        floor2[6].vertices = [ floor2[5], floor2[31], floor2[7] ];
        floor2[7].vertices = [ floor2[6], floor2[8], floor2[115] ];
        floor2[8].vertices = [ floor2[7], floor2[117], floor2[30], floor2[9] ];
        floor2[9].vertices = [ floor2[8], floor2[54], floor2[25], floor2[10] ];
        floor2[10].vertices = [ floor2[9], floor2[26], floor2[11] ];
        floor2[11].vertices = [ floor2[10], floor2[20], floor2[12], floor2[108] ];
        floor2[12].vertices = [ floor2[11], floor2[22], floor2[13] ];
        floor2[13].vertices = [ floor2[12], floor2[14], floor2[24] ];
        floor2[14].vertices = [ floor2[13], floor2[15], floor2[16] ];
        floor2[15].vertices = [ floor2[14] ];
        floor2[16].vertices = [ /* floor3 stairwell 02 */, floor2[14], floor2[17] ];
        floor2[17].vertices = [ floor2[16], floor2[18] ];
        floor2[18].vertices = [ floor2[17], floor2[19] ];
        floor2[19].vertices = [ floor2[18], /* floor1 stairwell 02 */ ];
        floor2[20].vertices = [ floor2[11], floor2[21] ];
        floor2[21].vertices = [ floor2[20], /* floor1 computing commons stairs */ ];
        floor2[22].vertices = [ floor2[12], floor2[23] ];
        floor2[23].vertices = [ floor2[22], floor2[24] ];
        floor2[24].vertices = [ floor2[23], floor2[13] ];
        floor2[25].vertices = [ /* floor1 elevator */, /* floor3 elevator */, floor2[9] ];
        floor2[26].vertices = [ floor2[10], floor2[27] ];
        floor2[27].vertices = [ floor2[26], floor2[28] ];
        floor2[28].vertices = [ floor2[27], floor2[29] ];
        floor2[29].vertices = [ floor2[28], floor2[30] ];
        floor2[30].vertices = [ floor2[8], floor2[29] ];
        floor2[31].vertices = [ floor2[6], floor2[32] ];
        floor2[32].vertices = [ floor2[31], floor2[33], floor2[34] ];
        floor2[33].vertices = [ floor2[32] ];
        floor2[34].vertices = [ floor2[32], floor2[35], floor2[36], floor2[38] ];
        floor2[35].vertices = [ floor2[34] ];
        floor2[36].vertices = [ floor2[34] ];
        floor2[37].vertices = [ floor2[38] ];
        floor2[38].vertices = [ floor2[34], floor2[37], floor2[39] ];
        floor2[39].vertices = [ floor2[38], floor2[40], floor2[41], floor2[42] ];
        floor2[40].vertices = [ floor2[39] ];
        floor2[41].vertices = [ floor2[39] ];
        floor2[42].vertices = [ floor2[39], floor2[43] ];
        floor2[43].vertices = [ floor2[42], floor2[44], floor2[46], floor2[47] ];
        floor2[44].vertices = [ floor2[43], floor2[45] ];
        floor2[45].vertices = [ floor2[44] ];
        floor2[46].vertices = [ floor2[46] ];
        floor2[47].vertices = [ floor2[43], floor2[48], floor2[49] ];
        floor2[48].vertices = [ floor2[47] ];
        floor2[49].vertices = [ floor2[47], floor2[50], floor2[51], floor2[52] ];
        floor2[50].vertices = [ floor2[49] ];
        floor2[51].vertices = [ floor2[49] ];
        floor2[52].vertices = [ floor2[49], floor2[53], floor2[54] ];
        floor2[53].vertices = [ floor2[52] ];
        floor2[54].vertices = [ floor2[52], floor2[55], floor2[9] ];
        floor2[55].vertices = [ floor2[55] ];
        floor2[56].vertices = [ floor2[5], floor2[58], floor2[57], floor2[61] ];
        floor2[57].vertices = [ floor2[56] ];
        floor2[58].vertices = [ floor2[56], floor2[59] ];
        floor2[59].vertices = [ floor2[58], floor2[60] ];
        floor2[60].vertices = [ floor2[59], floor2[63] ];
        floor2[61].vertices = [ floor2[56], floor2[62], floor2[63] ];
        floor2[62].vertices = [ floor2[61] ];
        floor2[63].vertices = [ floor2[61], floor2[60], floor2[64], floor2[65] ];
        floor2[64].vertices = [ floor2[63] ];
        floor2[65].vertices = [ floor2[63], floor2[66], floor2[67] ];
        floor2[66].vertices = [ floor2[65] ];
        floor2[67].vertices = [ floor2[65], floor2[68], floor2[72] ];
        floor2[68].vertices = [ floor2[67], floor2[69], floor2[70] ];
        floor2[69].vertices = [ floor2[68] ];
        floor2[70].vertices = [ floor2[68], floor2[71] ];
        floor2[71].vertices = [ floor2[70] ];
        floor2[72].vertices = [ floor2[67], floor2[73], floor2[74] ];
        floor2[73].vertices = [ floor2[72] ];
        floor2[74].vertices = [ floor2[72], floor2[75], floor2[76] ];
        floor2[75].vertices = [ floor2[74] ];
        floor2[76].vertices = [ floor2[74], floor2[77], floor2[78] ];
        floor2[77].vertices = [ floor2[76] ];
        floor2[78].vertices = [ floor2[76], floor2[79], floor2[80] ];
        floor2[79].vertices = [ floor2[78] ];
        floor2[80].vertices = [ floor2[81], floor2[78], floor2[82] ];
        floor2[81].vertices = [ floor2[80] ];
        floor2[82].vertices = [ floor2[80], floor2[83], floor2[84] ];
        floor2[83].vertices = [ floor2[82] ];
        floor2[84].vertices = [ floor2[82], floor2[85], floor2[86], floor2[87] ];
        floor2[85].vertices = [ floor2[84] ];
        floor2[86].vertices = [ floor2[84] ];
        floor2[87].vertices = [ floor2[84], floor2[88], floor2[89] ];
        floor2[88].vertices = [ floor2[87] ];
        floor2[89].vertices = [ floor2[87], floor2[90], floor2[91] ];
        floor2[90].vertices = [ floor2[89] ];
        floor2[91].vertices = [ floor2[89], floor2[92], floor2[93] ];
        floor2[92].vertices = [ floor2[91] ];
        floor2[93].vertices = [ floor2[91], floor2[94], floor2[95] ];
        floor2[94].vertices = [ floor2[93] ];
        floor2[95].vertices = [ floor2[93], floor2[96], floor2[97] ];
        floor2[96].vertices = [ floor2[95] ];
        floor2[97].vertices = [ floor2[95], floor2[98], floor2[99] ];
        floor2[98].vertices = [ floor2[97] ];
        floor2[99].vertices = [ floor2[97], floor2[101], floor2[100], floor2[102] ];
        floor2[100].vertices = [ floor2[99] ];
        floor2[101].vertices = [ floor2[99] ];
        floor2[102].vertices = [ floor2[99], floor2[103], floor2[104] ];
        floor2[103].vertices = [ floor2[102] ];
        floor2[104].vertices = [ floor2[102], floor2[105], floor2[106] ];
        floor2[105].vertices = [ floor2[104] ];
        floor2[106].vertices = [ floor2[104], floor2[107], floor2[108] ];
        floor2[107].vertices = [ floor2[106] ];
        floor2[108].vertices = [ floor2[106], floor2[109], floor2[11] ];
        floor2[109].vertices = [ floor2[108], floor2[110], floor2[111] ];
        floor2[110].vertices = [ floor2[109] ];
        floor2[111].vertices = [ floor2[109], floor2[112], floor2[113] ];
        floor2[112].vertices = [ floor2[111] ];
        floor2[113].vertices = [ floor2[111], floor2[114] ];
        floor2[114].vertices = [ floor2[113] ];
        floor2[115].vertices = [ floor2[7], floor2[116] ];
        floor2[116].vertices = [ floor2[115], floor2[117] ];
        floor2[117].vertices = [ floor2[116], floor2[8] ];
        

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
        // Find index of the given element in the queue.
        // Note that the indexOf() Array method cannot be used because the queue[] stores QElements and not elements.
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

    /**
     * Determines if the input is one of the end nodes.
     * @param {string} searchRoom - The user input.
     * @return {bool} true if the input is an end node and false if it is not an end node.
     */
    vaildinput(searchRoom)
    {
      for (let i = 0; i < this.nodes.length; i++) {

        let searching_room_name = this.nodes[i].name;
        let searching_room_number = this.nodes[i].roomNumber;
        if (searching_room_name != undefined)
        {
          searching_room_name = searching_room_name.toLowerCase();// makes the node names all lower case
        }
        //console.log(searching_room); /* prints every name of a node if they have one*/
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

    /**
     * Determines the path between the start node given to the constructor and the specified end node.
     * @param {string} searchRoom - The user input.
     * @return {number} retuns the position of the node in the node array so that the pathfinding can use the node.
     */
    returnnodelocation(searchRoom)
    {
      for (let i = 0; i < this.nodes.length; i++) {

        let searching_room_name = this.nodes[i].name;
        let searching_room_number = this.nodes[i].roomNumber;
        if (searching_room_name != undefined)
        {
          searching_room_name = searching_room_name.toLowerCase();// makes the node names all lower case
        }
        //console.log(searching_room); /* prints every name of a node if they have one*/
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
let searchroomid = document.getElementById('searchroomid').value;//the text box
let selectedfloor = document.getElementById('floor_level').value;//the floors button 
let startloaction = document.getElementById('starting_location').value;//the the start location button 
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
        let pather = new Pathfinder(map.nodeMap, map.Eaton.floor[floornumber].nodes[startnodenumber]);
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
                tempNode.setAttributeNS(null, 'r', '7');
            }
            else
            {
                tempNode.setAttributeNS(null, 'r', '2');
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
            tempLine.setAttributeNS(null, 'stroke-width', '5');
            svgNode.appendChild(tempNode);
            svgNode.appendChild(tempLine);
            last_coords[0] = test_Arr[j-2];
            last_coords[1] = test_Arr[j-1];
        }

        //replaces the starting node so that the red is on top of the blue
        let tempNode = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        tempNode.setAttributeNS(null, 'cx', test_Arr[0]);
        tempNode.setAttributeNS(null, 'cy', test_Arr[1]);
        tempNode.setAttributeNS(null, 'r', '7');
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

function openFloor(event, floorName) {

    let i, tabObj, tabPath;
    
    tabObj = document.getElementsByClassName("floorCont");
  for (i = 0; i < tabObj.length; i++) {
    tabObj[i].style.display = "none";
  }

  tabPath = document.getElementsByClassName("tabs");
  for (i = 0; i < tabPath.length; i++) {
    tabPath[i].className = tabPath[i].className.replace(" active", "");
  }

  document.getElementById(floorName).style.display = "block";
  evt.currentTarget.className += " active";

}


let map = new Map;
let floorGsearch = new Search(map.Eaton.floor[0].nodes);

let pathfinder = new Pathfinder(map.nodeMap, map.Eaton.floor[0].nodes[0]);
let p = pathfinder.getPathTo(map.Eaton.floor[1].nodes[4]);
console.log("Path from front entrance to Career center");
while (p.length > 0) {
    let node = p.pop();
    console.log(node.x_coord + ' ' + node.y_coord);
}

document.getElementById("pageDefault").click();
document.getElementById("pageDefault").focus();
