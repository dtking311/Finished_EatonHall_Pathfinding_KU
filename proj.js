
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
		this.nodeMap = this.Eaton.floor[0].nodes.concat(this.Eaton.floor[1].nodes, this.Eaton.floor[2].nodes, this.Eaton.floor[3].nodes);

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
		floorB[14] = new EndNode(380, 379, -1, "BE01 Elevator");
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

		//Pathing nodes
		floor1[1] = new Node(600, 340);
		floor1[2] = new Node(421, 340);
		floor1[3] = new Node(421, 277);
		floor1[6] = new Node(452, 277);
		floor1[7] = new Node(452, 153);
		floor1[8] = new Node(482, 153);
		floor1[12] = new Node(658, 313);
		floor1[13] = new Node(658, 284);
		floor1[14] = new Node(600, 391);
		floor1[15] = new Node(140, 391);
		floor1[16] = new Node(196, 391);
		floor1[18] = new Node(196, 242);
		floor1[19] = new Node(225, 242);
		floor1[20] = new Node(225, 211);
		floor1[21] = new Node(225, 195);
		floor1[22] = new Node(225, 169);
		floor1[23] = new Node(225, 119);
		floor1[24] = new Node(225, 77);
		floor1[25] = new Node(247, 77);
		floor1[26] = new Node(285, 77);
		floor1[37] = new Node(627, 495);
		floor1[38] = new Node(558, 528);
		floor1[39] = new Node(522, 538);
		floor1[40] = new Node(491, 544);
		floor1[41] = new Node(458, 550);
		floor1[43] = new Node(735, 405);
		floor1[44] = new Node(869, 389);
		floor1[45] = new Node(987, 389);
		floor1[46] = new Node(1044, 389);
		floor1[47] = new Node(1044, 443);
		floor1[48] = new Node(1032, 443);
		floor1[56] = new Node(806, 500);
		floor1[58] = new Node(831, 440);
		floor1[59] = new Node(869, 440);
		floor1[60] = new Node(831, 494);
		floor1[61] = new Node(1088,523);
		floor1[62] = new Node(1115,523);
		floor1[64] = new Node(114,340);
		floor1[65] = new Node(114,263);
		floor1[66] = new Node(140,263);
		floor1[67] = new Node(694,368);

		//Destination nodes
		floor1[0] = new EndNode(600, 465, null, "Stairs");
		floor1[4] = new EndNode(370, 277, null, "1005A");
		floor1[5] = new EndNode(549, 277, 1005, "Self Computing Commons");
		floor1[9] = new EndNode(452, 100, null, "1005C");
		floor1[11] = new EndNode(482, 100, null, "1005D");
		floor1[10] = new EndNode(421, 247, null, "1005B");
		floor1[17] = new EndNode(196, 321, 1001, "Engineering Career Center");
		floor1[27] = new EndNode(252, 211, null, "1001L");
		floor1[28] = new EndNode(201, 195, null, "1001A");
		floor1[29] = new EndNode(250, 169, null, "1001K");
		floor1[30] = new EndNode(201, 119, null, "1001B");
		floor1[31] = new EndNode(201, 77, null, "1001C");
		floor1[32] = new EndNode(225, 44, null, "1001D");
		floor1[33] = new EndNode(247, 52, null, "1001E");
		floor1[34] = new EndNode(247, 97, null, "1001J");
		floor1[35] = new EndNode(285, 52, null, "1001F");
		floor1[36] = new EndNode(285, 97, null, "1001H");
		floor1[42] = new EndNode(458, 667, null, "1002");
		floor1[49] = new EndNode(735, 500, null, "1010");
		floor1[50] = new EndNode(869, 500, null, "1014");
		floor1[51] = new EndNode(987, 446, null, "1016");
		floor1[52] = new EndNode(941, 446, null, "1015");
		floor1[53] = new EndNode(1033, 500, null, "1018");
		floor1[54] = new EndNode(1088, 443, null, "1S02");
		floor1[55] = new EndNode(1088, 389, null, "North Entrance");
		floor1[57] = new EndNode(806, 448, null, "1012");
		floor1[63] = new EndNode(140,340, null, "1S01");
		floor1[68] = new EndNode(751,338, null, "Floor 1 Computing Commons Stairs");
		floor1[69] = new EndNode(517,427, -1, "1E01 Elevator");

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
		floor2[15] = new EndNode(1005,330, null, "Skywalk Entrance");
		floor2[16] = new EndNode(926,377, null, "2S02");
		floor2[17] = new Node(953,377);
		floor2[18] = new Node(953,452);
		floor2[19] = new Node(926,452);
		floor2[20] = new Node(687,292);
		floor2[21] = new EndNode(619,297, null, "Computing Commons stairs");
		floor2[22] = new Node(786,385);
		floor2[23] = new EndNode(843,385, 2060, null);
		floor2[24] = new Node(898,385);
		floor2[25] = new EndNode(438,365, -1, "2E01 Elevator");
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

		// ---------------Floor 3--------
		let floor3 = this.Eaton.floor[3].nodes;

		floor3[0] = new Node(120,220);
		floor3[1] = new Node(98,220);
		floor3[2] = new Node(98,285);
		floor3[3] = new EndNode(120,285, null, "3S01");
		floor3[4] = new Node(120,330);
		floor3[5] = new Node(167,330);
		floor3[6] = new Node(323,330);
		floor3[7] = new Node(371,330);
		floor3[8] = new Node(415,330);
		floor3[9] = new Node(452,330);
		floor3[10] = new EndNode(436,366, -1, "3E01 Elevator");
		floor3[11] = new Node(520,330);
		floor3[12] = new Node(550,330);
		floor3[13] = new Node(754,330);
		floor3[14] = new Node(845,330);
		floor3[15] = new EndNode(813,366, null, "EECS Shop");
		floor3[16] = new Node(919,330);
		floor3[17] = new EndNode(919,376, null, "3S02");
		floor3[18] = new Node(947,376);
		floor3[19] = new Node(947,446);
		floor3[20] = new Node(919,446);
		floor3[21] = new EndNode(845,436, 3060, null);
		floor3[22] = new EndNode(882,436, null, "3060A");
		floor3[23] = new EndNode(882,385, 3062, null);
		floor3[24] = new Node(845,476);
		floor3[25] = new EndNode(822,476, null, "3050B");
		floor3[26] = new EndNode(822,512, null, "3050A");
		floor3[27] = new Node(845,512);
		floor3[28] = new EndNode(859,512, null, "3050C");
		floor3[29] = new EndNode(845,546, 3050, null);
		floor3[30] = new Node(882,546);
		floor3[31] = new EndNode(882,571, null, "3050D");
		floor3[32] = new EndNode(845,571, null, "3050E");
		floor3[33] = new EndNode(805,571, null, "3050F");
		floor3[34] = new EndNode(167,297, 3001, null);
		floor3[35] = new Node(323,286);
		floor3[36] = new EndNode(371,286, 3003, null);
		floor3[37] = new Node(415,286);
		floor3[38] = new Node(452,286);
		floor3[39] = new EndNode(502,286, 3005, null);
		floor3[40] = new Node(550,286);
		floor3[41] = new EndNode(371,363, 3002, null);
		floor3[42] = new Node(371,467);
		floor3[43] = new EndNode(448,467, null, "3002A");
		floor3[44] = new Node(520,467);
		floor3[45] = new EndNode(520,363, 3010, null);
		floor3[46] = new Node(167,385);
		floor3[47] = new EndNode(143,385, 3012, null);
		floor3[48] = new EndNode(189,385, 3011, null);
		floor3[49] = new Node(167,429);
		floor3[50] = new EndNode(143,429, 3014, null);
		floor3[51] = new EndNode(189,429, 3013, null);
		floor3[52] = new Node(167,473);
		floor3[53] = new EndNode(143,473, 3016, null);
		floor3[54] = new EndNode(189,473, 3015, null);
		floor3[55] = new Node(167,518);
		floor3[56] = new EndNode(143,518, 3018, null);
		floor3[57] = new Node(167,541);
		floor3[58] = new Node(142,541);
		floor3[59] = new EndNode(142,560, 3022, null);
		floor3[60] = new Node(122,541);
		floor3[61] = new EndNode(122,560, 3020, null);
		floor3[62] = new Node(186,541);
		floor3[63] = new EndNode(186,560, 3024, null);
		floor3[64] = new Node(215,541);
		floor3[65] = new EndNode(215,520, 3025, null);
		floor3[66] = new Node(232,541);
		floor3[67] = new EndNode(232,560, 3026, null);
		floor3[68] = new Node(274,541);
		floor3[69] = new EndNode(274,560, 3028, null);
		floor3[70] = new Node(294,541);
		floor3[71] = new EndNode(294,520, 3027, null);
		floor3[72] = new Node(318,541);
		floor3[73] = new EndNode(318,560, 3030, null);
		floor3[74] = new Node(364,541);
		floor3[75] = new EndNode(364,520, 3029, null);
		floor3[76] = new EndNode(364,560, 3032, null);
		floor3[77] = new Node(408,541);
		floor3[78] = new EndNode(408,560, 3034, null);
		floor3[79] = new Node(451,541);
		floor3[80] = new EndNode(451,560, 3036, null);
		floor3[81] = new Node(498,541);
		floor3[82] = new EndNode(498,560, 3038, null);
		floor3[83] = new Node(540,541);
		floor3[84] = new EndNode(540,560, 3040, null);
		floor3[85] = new Node(580,541);
		floor3[86] = new EndNode(578,520, 3039, null);
		floor3[87] = new EndNode(583,560, 3042, null);
		floor3[88] = new Node(626,541);
		floor3[89] = new EndNode(623,520, 3041, null);
		floor3[90] = new EndNode(629,560, 3044, null);
		floor3[91] = new Node(676,541);
		floor3[92] = new EndNode(676,560, 3046, null);
		floor3[93] = new Node(702,541);
		floor3[94] = new EndNode(702,520, 3043, null);
		floor3[95] = new Node(729,541);
		floor3[96] = new EndNode(729,560, 3048, null);
		floor3[97] = new Node(754,541);
		floor3[98] = new Node(805,546);

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
		floorB[8].vertices = [ floorB[4], floor1[0] ];
		floorB[9].vertices = [ floorB[3], floorB[18] ];
		floorB[10].vertices = [ floorB[6], floorB[11], floorB[12], floorB[15] ];
		floorB[11].vertices = [ floorB[2], floorB[10] ];
		floorB[12].vertices = [ floorB[2], floorB[10] ];
		floorB[13].vertices = [ floorB[3], floorB[18] ];
		floorB[14].vertices = [ floorB[3], floorB[4], floor1[69] ];
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
		floorB[46].vertices = [ floorB[45], floor1[66] ];

		// Floor 1
		floor1[0].vertices = [ floor1[14], floor1[37], floor1[43], floorB[8], floor1[67] ];
		floor1[1].vertices = [ floor1[14], floor1[12], floor1[2] ];
		floor1[2].vertices = [ floor1[3], floor1[6], floor1[1] ];
		floor1[3].vertices = [ floor1[2], floor1[4], floor1[6], floor1[10] ];
		floor1[4].vertices = [ floor1[3] ];
		floor1[5].vertices = [ floor1[6], floor1[13] ];
		floor1[6].vertices = [ floor1[2], floor1[3], floor1[5], floor1[7], floor1[8] ];
		floor1[7].vertices = [ floor1[6], floor1[8], floor1[9] ];
		floor1[8].vertices = [ floor1[6], floor1[7], floor1[11] ];
		floor1[9].vertices = [ floor1[7] ];
		floor1[10].vertices = [ floor1[3] ];
		floor1[11].vertices = [ floor1[8] ];
		floor1[12].vertices = [ floor1[1], floor1[13] ];
		floor1[13].vertices = [ floor1[5], floor1[12] ];
		floor1[14].vertices = [ floor1[0], floor1[1], floor1[43], floor1[16], floor1[37], floor1[69], floor1[67] ];
		floor1[15].vertices = [ floor1[16], floor1[63] ];
		floor1[16].vertices = [ floor1[14], floor1[15], floor1[17] ];
		floor1[17].vertices = [ floor1[18], floor1[16] ];
		floor1[18].vertices = [ floor1[17], floor1[19] ];
		floor1[19].vertices = [ floor1[18], floor1[20] ];
		floor1[20].vertices = [ floor1[19], floor1[21], floor1[27] ];
		floor1[21].vertices = [ floor1[22], floor1[20], floor1[28] ];
		floor1[22].vertices = [ floor1[23], floor1[21], floor1[29] ];
		floor1[23].vertices = [ floor1[24], floor1[22], floor1[30] ];
		floor1[24].vertices = [ floor1[23], floor1[25], floor1[31], floor1[32] ];
		floor1[25].vertices = [ floor1[24], floor1[26], floor1[33], floor1[34] ];
		floor1[26].vertices = [ floor1[25], floor1[35], floor1[36] ];
		floor1[27].vertices = [ floor1[20] ];
		floor1[28].vertices = [ floor1[21] ];
		floor1[29].vertices = [ floor1[22] ];
		floor1[30].vertices = [ floor1[23] ];
		floor1[31].vertices = [ floor1[24] ];
		floor1[32].vertices = [ floor1[24] ];
		floor1[33].vertices = [ floor1[25] ];
		floor1[34].vertices = [ floor1[25] ];
		floor1[35].vertices = [ floor1[26] ];
		floor1[36].vertices = [ floor1[26] ];
		floor1[37].vertices = [ floor1[0], floor1[38] ];
		floor1[38].vertices = [ floor1[37], floor1[39] ];
		floor1[39].vertices = [ floor1[38], floor1[40] ];
		floor1[40].vertices = [ floor1[39], floor1[41] ];
		floor1[41].vertices = [ floor1[40], floor1[42] ];
		floor1[42].vertices = [ floor1[41] ];
		floor1[43].vertices = [ floor1[0], floor1[14], floor1[44], floor1[49], floor1[69], floor1[67] ];
		floor1[44].vertices = [ floor1[43], floor1[45], floor1[59] ];
		floor1[45].vertices = [ floor1[44], floor1[46], floor1[51] ];
		floor1[46].vertices = [ floor1[45], floor1[47], floor1[55] ];
		floor1[47].vertices = [ floor1[46], floor1[48], floor1[54] ];
		floor1[48].vertices = [ floor1[47], floor1[53] ];
		floor1[49].vertices = [ floor1[43], floor1[56] ];
		floor1[50].vertices = [ floor1[59], floor1[60] ];
		floor1[51].vertices = [ floor1[45], floor1[52] ];
		floor1[52].vertices = [ floor1[51] ];
		floor1[53].vertices = [ floor1[48] ];
		floor1[54].vertices = [ floor1[47], floor1[61] ];
		floor1[55].vertices = [ floor1[46] ];
		floor1[56].vertices = [ floor1[49], floor1[57] ];
		floor1[57].vertices = [ floor1[56], floor1[58] ];
		floor1[58].vertices = [ floor1[57], floor1[59], floor1[60] ];
		floor1[59].vertices = [ floor1[44], floor1[50], floor1[58] ];
		floor1[60].vertices = [ floor1[50], floor1[58] ];
		floor1[61].vertices = [ floor1[54], floor1[62] ];
		floor1[62].vertices = [ floor1[61], floor2[19] ];
		floor1[63].vertices = [ floor1[15], floor1[64], floor2[0] ];
		floor1[64].vertices = [ floor1[63], floor1[65] ];
		floor1[65].vertices = [ floor1[64], floor1[66] ];
		floor1[66].vertices = [ floor1[65], floorB[46] ];
		floor1[67].vertices = [ floor1[14], floor1[0], floor1[69], floor1[43], floor1[68] ];
		floor1[68].vertices = [ floor1[67], floor2[21] ];
		floor1[69].vertices = [ floor1[14], floor1[43], floor1[67], floorB[14], floor2[25] ];

		// Floor 2
		floor2[0].vertices = [ floor1[63], floor2[1] ];
		floor2[1].vertices = [ floor2[0], floor2[2] ];
		floor2[2].vertices = [ floor2[1], floor2[3] ];
		floor2[3].vertices = [ floor2[2], floor2[4], floor3[0] ];
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
		floor2[16].vertices = [ floor3[20], floor2[14], floor2[17] ];
		floor2[17].vertices = [ floor2[16], floor2[18] ];
		floor2[18].vertices = [ floor2[17], floor2[19] ];
		floor2[19].vertices = [ floor2[18], floor1[62] ];
		floor2[20].vertices = [ floor2[11], floor2[21] ];
		floor2[21].vertices = [ floor2[20], floor1[68] ];
		floor2[22].vertices = [ floor2[12], floor2[23] ];
		floor2[23].vertices = [ floor2[22], floor2[24] ];
		floor2[24].vertices = [ floor2[23], floor2[13] ];
		floor2[25].vertices = [ floor1[69], floor3[10], floor2[9] ];
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

		// Floor 3
		floor3[0].vertices = [ floor2[3], floor3[1] ];
		floor3[1].vertices = [ floor3[0], floor3[2] ];
		floor3[2].vertices = [ floor3[1], floor3[3] ];
		floor3[3].vertices = [ floor3[2], floor3[4] ];
		floor3[4].vertices = [ floor3[3], floor3[5] ];
		floor3[5].vertices = [ floor3[4], floor3[34], floor3[6], floor3[46] ];
		floor3[6].vertices = [ floor3[5], floor3[35], floor3[7] ];
		floor3[7].vertices = [ floor3[6], floor3[41], floor3[8] ];
		floor3[8].vertices = [ floor3[7], floor3[37], floor3[9] ];
		floor3[9].vertices = [ floor3[8], floor3[10], floor3[38], floor3[11] ];
		floor3[10].vertices = [ floor3[9], floor2[25] ];
		floor3[11].vertices = [ floor3[9], floor3[45], floor3[12] ];
		floor3[12].vertices = [ floor3[11], floor3[40], floor3[13] ];
		floor3[13].vertices = [ floor3[12], floor3[15], floor3[14], floor3[97] ];
		floor3[14].vertices = [ floor3[13], floor3[15], floor3[16], floor3[21] ];
		floor3[15].vertices = [ floor3[13], floor3[14] ];
		floor3[16].vertices = [ floor3[14], floor3[17] ];
		floor3[17].vertices = [ floor3[16], floor3[18] ];
		floor3[18].vertices = [ floor3[17], floor3[19] ];
		floor3[19].vertices = [ floor3[18], floor3[20] ];
		floor3[20].vertices = [ floor3[19], floor2[16] ];
		floor3[21].vertices = [ floor3[14], floor3[22], floor3[24] ];
		floor3[22].vertices = [ floor3[21], floor3[23] ];
		floor3[23].vertices = [ floor3[22] ];
		floor3[24].vertices = [ floor3[21], floor3[25], floor3[27] ];
		floor3[25].vertices = [ floor3[24] ];
		floor3[26].vertices = [ floor3[27] ];
		floor3[27].vertices = [ floor3[24], floor3[28], floor3[26], floor3[29] ];
		floor3[28].vertices = [ floor3[27] ];
		floor3[29].vertices = [ floor3[98], floor3[27], floor3[30], floor3[32] ];
		floor3[30].vertices = [ floor3[29], floor3[31] ];
		floor3[31].vertices = [ floor3[30] ];
		floor3[32].vertices = [ floor3[29] ];
		floor3[33].vertices = [ floor3[98] ];
		floor3[34].vertices = [ floor3[5] ];
		floor3[35].vertices = [ floor3[6], floor3[36] ];
		floor3[36].vertices = [ floor3[35], floor3[37] ];
		floor3[37].vertices = [ floor3[36], floor3[8] ];
		floor3[38].vertices = [ floor3[9], floor3[39] ];
		floor3[39].vertices = [ floor3[38], floor3[40] ];
		floor3[40].vertices = [ floor3[39], floor3[12] ];
		floor3[41].vertices = [ floor3[7], floor3[42] ];
		floor3[42].vertices = [ floor3[41], floor3[43] ];
		floor3[43].vertices = [ floor3[42], floor3[44] ];
		floor3[44].vertices = [ floor3[43], floor3[45] ];
		floor3[45].vertices = [ floor3[11], floor3[44] ];
		floor3[46].vertices = [ floor3[5], floor3[47], floor3[48], floor3[49] ];
		floor3[47].vertices = [ floor3[46] ];
		floor3[48].vertices = [ floor3[46] ];
		floor3[49].vertices = [ floor3[46], floor3[50], floor3[51], floor3[52] ];
		floor3[50].vertices = [ floor3[49] ];
		floor3[51].vertices = [ floor3[49] ];
		floor3[52].vertices = [ floor3[49], floor3[53], floor3[54], floor3[55] ];
		floor3[53].vertices = [ floor3[52] ];
		floor3[54].vertices = [ floor3[52] ];
		floor3[55].vertices = [ floor3[52], floor3[56], floor3[57] ];
		floor3[56].vertices = [ floor3[55] ];
		floor3[57].vertices = [ floor3[55], floor3[58], floor3[62] ];
		floor3[58].vertices = [ floor3[57], floor3[59], floor3[60] ];
		floor3[59].vertices = [ floor3[58] ];
		floor3[60].vertices = [ floor3[58], floor3[61] ];
		floor3[61].vertices = [ floor3[60] ];
		floor3[62].vertices = [ floor3[57], floor3[63], floor3[64] ];
		floor3[63].vertices = [ floor3[62] ];
		floor3[64].vertices = [ floor3[62], floor3[65], floor3[66] ];
		floor3[65].vertices = [ floor3[64] ];
		floor3[66].vertices = [ floor3[64], floor3[67], floor3[68] ];
		floor3[67].vertices = [ floor3[66] ];
		floor3[68].vertices = [ floor3[66], floor3[69], floor3[70] ];
		floor3[69].vertices = [ floor3[68] ];
		floor3[70].vertices = [ floor3[68], floor3[71], floor3[72] ];
		floor3[71].vertices = [ floor3[70] ];
		floor3[72].vertices = [ floor3[70], floor3[73], floor3[74] ];
		floor3[73].vertices = [ floor3[72] ];
		floor3[74].vertices = [ floor3[72], floor3[75], floor3[76], floor3[77] ];
		floor3[75].vertices = [ floor3[74] ];
		floor3[76].vertices = [ floor3[74] ];
		floor3[77].vertices = [ floor3[74], floor3[78], floor3[79] ];
		floor3[78].vertices = [ floor3[77] ];
		floor3[79].vertices = [ floor3[77], floor3[80], floor3[81] ];
		floor3[80].vertices = [ floor3[79] ];
		floor3[81].vertices = [ floor3[79], floor3[82], floor3[83] ];
		floor3[82].vertices = [ floor3[81] ];
		floor3[83].vertices = [ floor3[81], floor3[84], floor3[85] ];
		floor3[84].vertices = [ floor3[83] ];
		floor3[85].vertices = [ floor3[83], floor3[86], floor3[87], floor3[88] ];
		floor3[86].vertices = [ floor3[85] ];
		floor3[87].vertices = [ floor3[85] ];
		floor3[88].vertices = [ floor3[85], floor3[89], floor3[90], floor3[91] ];
		floor3[89].vertices = [ floor3[88] ];
		floor3[90].vertices = [ floor3[88] ];
		floor3[91].vertices = [ floor3[88], floor3[92], floor3[93] ];
		floor3[92].vertices = [ floor3[91] ];
		floor3[93].vertices = [ floor3[91], floor3[94], floor3[95] ];
		floor3[94].vertices = [ floor3[93] ];
		floor3[95].vertices = [ floor3[93], floor3[96], floor3[97] ];
		floor3[96].vertices = [ floor3[95] ];
		floor3[97].vertices = [ floor3[95], floor3[98], floor3[13] ];
		floor3[98].vertices = [ floor3[97], floor3[33], floor3[29] ];

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
		if (node1 instanceof EndNode && node2 instanceof EndNode) {
			if (node1.roomNumber === -1 && node2.roomNumber === -1) // Proper weighting for path between points on elevator
				return 200;
		}
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


//-----------------------------------Runtime-------------------------------------

//---------initialization of runtime vars-----------

let map = new Map; // initialize node map
let numFloors = map.Eaton.floor.length;

// Create new svg div for each floor
let groundFloor = document.getElementById('Eaton_g_floor_svg');
let firstFloor = document.getElementById('Eaton_1_floor_svg');
let secondFloor = document.getElementById('Eaton_2_floor_svg');
let thirdFloor = document.getElementById('Eaton_3_floor_svg');

let ground_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
ground_svg.setAttributeNS(null, "id", "groundPath");
groundFloor.appendChild(ground_svg);

let first_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
first_svg.setAttributeNS(null, "id", "firstPath");
firstFloor.appendChild(first_svg);

let second_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
second_svg.setAttributeNS(null, "id", "secondPath");
secondFloor.appendChild(second_svg);

let third_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
third_svg.setAttributeNS(null, "id", "thirdPath");
thirdFloor.appendChild(third_svg);

//-------end initialization------------

//-------Search Functions---------------

let roomnumber, roomname;
/**
 * callback function used with the find method on node arrays.
 * @pre roomnumber and/or roomname must be defined.
 * @param {Node} node
 * @return {bool} true if the node was found.
 */
function isEndNode(node) {
	
	if (node instanceof EndNode) {
		if (node.roomNumber == roomnumber && node.roomNumber != null)
			return true;
		else if (node.name != null)
			return (node.name.toLowerCase() == roomname.toLowerCase());
	}
	return false;
}

/**
 * Searches for an EndNode given a search term.
 * @param {String} key - the search term for the node
 * @return {EndNode} the EndNode corresponding to key, or undefined if none was found.
 */
function search(key) {
	roomnumber = key;
	roomname = key;

	return map.nodeMap.find(isEndNode);
}

/**
 * Determines the floor the given node resides on
 * @param {Node} node
 * @return {Number} the index of the floor in the Building's array of floors, or -1 if the node was not found.
 */
function getFloor(node) {
    for (let i = 0; i < numFloors; i++) {
        if (map.Eaton.floor[i].nodes.includes(node))
            return i;
    }
    return -1;
}

//-------Runtime code-------
document.querySelector("#searchbutton").addEventListener('click', function () {

	// Perform search
	roomname = document.getElementById("starting_location").value;
	let startNode = search(roomname);

	let destinationNode = search(document.getElementById('searchroomid').value);
	if (destinationNode == undefined) {
		alert("Not a valid destination");
		return;
	}

	// Pathfinding
	let pather = new Pathfinder(map.nodeMap, startNode);
	let path = pather.getPathTo(destinationNode);

	// Drawing Path
	let groundVisited = false; // change to array of bools
	let groundPath;
	while (path.length > 0) {
		let n = path.pop(); // pop a node off of the path array.
		console.log(getFloor(n));
		if (!groundVisited) {
			groundPath = 'M' + n.x_coord + ' ' + n.y_coord;
			groundVisited = true;
		} else {
			groundPath += ' L' + n.x_coord + ' ' + n.y_coord;
		}
	}

	if (groundVisited) {
		console.log(groundPath);
		let tempPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		tempPath.setAttributeNS(null, 'd', groundPath);
		tempPath.setAttributeNS(null, 'stroke', 'blue');
		tempPath.setAttributeNS(null, 'stroke-width', '5');
		tempPath.setAttributeNS(null, 'fill', 'transparent');
		ground_svg.appendChild(tempPath);
	}

	let tempNode = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	tempNode.setAttributeNS(null, 'cx', startNode.x_coord);
	tempNode.setAttributeNS(null, 'cy', startNode.y_coord);
	tempNode.setAttributeNS(null, 'r', '7');
	tempNode.setAttributeNS(null, 'fill', 'red');
	ground_svg.appendChild(tempNode);

	tempNode = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	tempNode.setAttributeNS(null, 'cx', destinationNode.x_coord);
	tempNode.setAttributeNS(null, 'cy', destinationNode.y_coord);
	tempNode.setAttributeNS(null, 'r', '7');
	tempNode.setAttributeNS(null, 'fill', 'blue');
	ground_svg.appendChild(tempNode);
	
});

//--------------------------------End Runtime-------------------------------

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
	event.currentTarget.className += " active";
}

//-------------------------------------Test Suite------------------------------------

document.querySelector("#testbutton").addEventListener('click',  function () {
console.log("________________________TESTING_________________________________");

//testing the pathfinder with diffrent locations
let pathfinder1 = new Pathfinder(map.nodeMap, map.Eaton.floor[0].nodes[0]);
let p1 = pathfinder1.getPathTo(map.Eaton.floor[0].nodes[9]);
console.log("Path from front entrance to Deans Office");
while (p1.length > 0) {
	let node = p1.pop();
	console.log(node.x_coord + ' ' + node.y_coord);
}

let pathfinder2 = new Pathfinder(map.nodeMap, map.Eaton.floor[0].nodes[0]);
let p2 = pathfinder2.getPathTo(map.Eaton.floor[1].nodes[4]);
console.log("Path from front entrance to Career center");
while (p2.length > 0) {
	let node = p2.pop();
	console.log(node.x_coord + ' ' + node.y_coord);
}

let pathfinder3 = new Pathfinder(map.nodeMap, map.Eaton.floor[0].nodes[0]);
let p3 = pathfinder3.getPathTo(map.Eaton.floor[2].nodes[31]);
console.log("Path from front entrance to EECS Department");
while (p3.length > 0) {
	let node = p3.pop();
	console.log(node.x_coord + ' ' + node.y_coord);
}

let pathfinder4 = new Pathfinder(map.nodeMap, map.Eaton.floor[0].nodes[0]);
let p4 = pathfinder4.getPathTo(map.Eaton.floor[3].nodes[15]);
console.log("Path from front entrance to EECS Shop");
while (p4.length > 0) {
	let node = p4.pop();
	console.log(node.x_coord + ' ' + node.y_coord);
}

let pathfinder5 = new Pathfinder(map.nodeMap, map.Eaton.floor[2].nodes[15]);
let p5 = pathfinder5.getPathTo(map.Eaton.floor[0].nodes[11]);
console.log("Path from Skywalk Entrance to Spahr Classroomr");
while (p5.length > 0) {
	let node = p5.pop();
	console.log(node.x_coord + ' ' + node.y_coord);
}

let pathfinder6 = new Pathfinder(map.nodeMap, map.Eaton.floor[2].nodes[15]);
let p6 = pathfinder6.getPathTo(map.Eaton.floor[1].nodes[4]);
console.log("Path from Skywalk Entrance to Career center");
while (p6.length > 0) {
	let node = p6.pop();
	console.log(node.x_coord + ' ' + node.y_coord);
}

let nametest;
let nametestinput;

// testing the seach fuction with names too see if they are in the array
console.log("is there a room 1a in Eaton");
nametestinput = "1a"
nametest = floorGsearch.validinput(nametestinput);
if (nametest == true)
{
  console.log("it is a room in Eaton");
}
else
{
  console.log("it is not a room in Eaton");
}

console.log("is there a room 1010 in Eaton");

nametestinput = "1010"
nametest = floor1search.validinput(nametestinput);
if (nametest == true)
{
  console.log("it is a room in Eaton");
}
else
{
  console.log("it is not a room in Eaton");
}

console.log("is there a room 1060 in Eaton");

nametestinput = "1060"
nametest = floor1search.validinput(nametestinput);
if (nametest == true)
{
  console.log("it is a room in Eaton");
}
else
{
  console.log("it is not a room in Eaton");
}

console.log("is there a room 2010 in Eaton");

nametestinput = "2010"
nametest = floor2search.validinput(nametestinput);
if (nametest == true)
{
  console.log("it is a room in Eaton");
}
else
{
  console.log("it is not a room in Eaton");
}

console.log("is there a room 2070 in Eaton");

nametestinput = "2070"
nametest = floor2search.validinput(nametestinput);
if (nametest == true)
{
  console.log("it is a room in Eaton");
}
else
{
  console.log("it is not a room in Eaton");
}

console.log("is there a room 3010 in Eaton");

nametestinput = "3010"
nametest = floor3search.validinput(nametestinput);
if (nametest == true)
{
  console.log("it is a room in Eaton");
}
else
{
  console.log("it is not a room in Eaton");
}

console.log("is there a room 3060 in Eaton");

nametestinput = "3060"
nametest = floor3search.validinput(nametestinput);
if (nametest == true)
{
  console.log("it is a room in Eaton");
}
else
{
  console.log("it is not a room in Eaton");
}

console.log("__________________END_OF_TESTING_________________________");
});

document.getElementById("pageDefault").click();
document.getElementById("pageDefault").focus();
