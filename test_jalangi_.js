J$.iids = {"8":[18,5,18,28],"9":[4,12,4,19],"10":[5,8,5,22],"17":[4,20,4,21],"18":[6,8,6,15],"25":[4,23,4,25],"26":[14,11,14,22],"33":[4,12,4,26],"34":[18,5,18,28],"41":[4,12,4,26],"42":[41,46,41,53],"49":[4,12,4,26],"50":[41,46,41,55],"57":[5,8,5,11],"58":[41,31,41,56],"65":[5,14,5,22],"66":[41,15,41,58],"73":[5,8,5,22],"81":[5,2,5,23],"89":[6,8,6,11],"97":[6,14,6,15],"105":[6,8,6,15],"113":[6,2,6,16],"121":[9,13,9,20],"129":[9,21,9,22],"137":[9,24,9,26],"145":[9,28,9,30],"153":[9,13,9,31],"161":[9,13,9,31],"169":[9,13,9,31],"177":[12,15,12,23],"185":[12,15,12,23],"193":[12,15,12,23],"201":[13,11,13,20],"209":[13,11,13,20],"217":[13,11,13,20],"225":[14,11,14,17],"233":[14,20,14,22],"241":[14,11,14,22],"249":[14,2,14,23],"257":[17,13,17,14],"265":[17,13,17,14],"273":[17,13,17,14],"281":[18,5,18,9],"289":[18,14,18,21],"297":[18,22,18,23],"305":[18,25,18,27],"313":[18,14,18,28],"321":[19,3,19,10],"329":[19,15,19,48],"337":[19,3,19,49],"339":[19,3,19,14],"345":[19,3,19,50],"353":[21,3,21,10],"361":[21,15,21,52],"369":[21,3,21,53],"371":[21,3,21,14],"377":[21,3,21,54],"385":[25,9,25,17],"393":[26,8,26,10],"401":[27,11,27,20],"409":[24,17,28,3],"417":[24,16,28,4],"425":[24,16,28,4],"433":[24,16,28,4],"441":[30,15,30,22],"449":[30,15,30,32],"457":[30,15,30,32],"465":[30,15,30,32],"473":[31,2,31,9],"481":[31,16,31,25],"489":[31,2,31,25],"497":[31,2,31,26],"505":[1,20,37,2],"513":[1,20,37,2],"521":[1,20,37,2],"529":[1,20,37,2],"537":[1,20,37,2],"545":[1,20,37,2],"553":[1,20,37,2],"561":[1,20,37,2],"569":[1,20,37,2],"577":[1,20,37,2],"585":[1,20,37,2],"593":[1,20,37,2],"601":[41,15,41,18],"609":[41,19,41,23],"617":[41,31,41,35],"625":[41,31,41,44],"627":[41,31,41,42],"633":[41,46,41,49],"641":[41,50,41,53],"649":[41,54,41,55],"657":[41,19,41,58],"659":[41,19,41,29],"665":[41,15,41,58],"673":[41,15,41,58],"681":[42,12,42,15],"689":[42,12,42,15],"697":[42,5,42,16],"705":[39,1,43,2],"713":[39,1,43,2],"721":[39,1,43,2],"729":[39,1,43,2],"737":[39,1,43,2],"745":[45,1,45,13],"753":[45,1,45,15],"761":[45,1,45,16],"769":[1,1,45,16],"777":[1,1,45,16],"785":[39,1,43,2],"793":[1,1,45,16],"801":[18,2,21,54],"809":[1,20,37,2],"817":[1,20,37,2],"825":[39,1,43,2],"833":[39,1,43,2],"841":[1,1,45,16],"849":[1,1,45,16],"nBranches":4,"originalCodeFileName":"/Users/Costasv/Documents/CSSoftSecProj/test.js","instrumentedCodeFileName":"/Users/Costasv/Documents/CSSoftSecProj/test_jalangi_.js","code":"var showExamples = function(){\n\t\n\t//generate NaN\n\tvar num = randNum(0, 10);\n\tnum = num + \"Costas\";\n\tnum = num / 2;\n\t\n\t//function call with more parameters\n\tvar num2 = randNum(0, 10, 50);\n\n\t//concatenate undefined to string\n\tvar costas = \"Costas\";\n\tvar un = undefined;\n\tcastas = costas + un;\n\n\t//compare functions with primitive\n\tvar five = 5;\n\tif(five === randNum(0, 10))\n\t\tconsole.log(\"5 is equal to the random number\");\n\telse\n\t\tconsole.log(\"5 is not equal to the random number\");\n\n\t//check for undifined access\n\tvar student = [{\n\t\tname: \"Costas\",\n\t\tage: 22,\n\t\theight: undefined\n\t}];\n\n\tvar height = student.notHeight;\n\tstudent.age = undefined;\n\t/*if(typeof myVar === undefined)\n\t\tconsole.long(\"myVar is undefined\");\n\telse\n\t\tconsole.long(\"myVar is defined\");\n\t*/\n};\n\nfunction randNum(min,max)\n{\n    var num = min+Math.floor((Math.random()*(max-min+1)));\n    return num;\n}\n\nshowExamples();"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(769, '/Users/Costasv/Documents/CSSoftSecProj/test_jalangi_.js', '/Users/Costasv/Documents/CSSoftSecProj/test.js');
            function randNum(min, max) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(705, arguments.callee, this, arguments);
                            arguments = J$.N(713, 'arguments', arguments, 4);
                            min = J$.N(721, 'min', min, 4);
                            max = J$.N(729, 'max', max, 4);
                            J$.N(737, 'num', num, 0);
                            var num = J$.X1(673, J$.W(665, 'num', J$.B(66, '+', J$.R(601, 'min', min, 0), J$.M(657, J$.R(609, 'Math', Math, 2), 'floor', 0)(J$.B(58, '*', J$.M(625, J$.R(617, 'Math', Math, 2), 'random', 0)(), J$.B(50, '+', J$.B(42, '-', J$.R(633, 'max', max, 0), J$.R(641, 'min', min, 0), 0), J$.T(649, 1, 22, false), 0), 0)), 0), num, 1));
                            return J$.X1(697, J$.Rt(689, J$.R(681, 'num', num, 0)));
                        } catch (J$e) {
                            J$.Ex(825, J$e);
                        } finally {
                            if (J$.Fr(833))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(777, 'showExamples', showExamples, 0);
            randNum = J$.N(793, 'randNum', J$.T(785, randNum, 12, false, 705), 0);
            var showExamples = J$.X1(593, J$.W(585, 'showExamples', J$.T(577, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(505, arguments.callee, this, arguments);
                            arguments = J$.N(513, 'arguments', arguments, 4);
                            J$.N(521, 'num', num, 0);
                            J$.N(529, 'num2', num2, 0);
                            J$.N(537, 'costas', costas, 0);
                            J$.N(545, 'un', un, 0);
                            J$.N(553, 'five', five, 0);
                            J$.N(561, 'student', student, 0);
                            J$.N(569, 'height', height, 0);
                            var num = J$.X1(49, J$.W(41, 'num', J$.F(33, J$.R(9, 'randNum', randNum, 1), 0)(J$.T(17, 0, 22, false), J$.T(25, 10, 22, false)), num, 1));
                            J$.X1(81, num = J$.W(73, 'num', J$.B(10, '+', J$.R(57, 'num', num, 0), J$.T(65, 'Costas', 21, false), 0), num, 0));
                            J$.X1(113, num = J$.W(105, 'num', J$.B(18, '/', J$.R(89, 'num', num, 0), J$.T(97, 2, 22, false), 0), num, 0));
                            var num2 = J$.X1(169, J$.W(161, 'num2', J$.F(153, J$.R(121, 'randNum', randNum, 1), 0)(J$.T(129, 0, 22, false), J$.T(137, 10, 22, false), J$.T(145, 50, 22, false)), num2, 1));
                            var costas = J$.X1(193, J$.W(185, 'costas', J$.T(177, 'Costas', 21, false), costas, 1));
                            var un = J$.X1(217, J$.W(209, 'un', J$.T(201, undefined, 24, false), un, 1));
                            J$.X1(249, castas = J$.W(241, 'castas', J$.B(26, '+', J$.R(225, 'costas', costas, 0), J$.R(233, 'un', un, 0), 0), J$.I(typeof castas === 'undefined' ? undefined : castas), 4));
                            var five = J$.X1(273, J$.W(265, 'five', J$.T(257, 5, 22, false), five, 1));
                            if (J$.X1(801, J$.C(8, J$.B(34, '===', J$.R(281, 'five', five, 0), J$.F(313, J$.R(289, 'randNum', randNum, 1), 0)(J$.T(297, 0, 22, false), J$.T(305, 10, 22, false)), 0))))
                                J$.X1(345, J$.M(337, J$.R(321, 'console', console, 2), 'log', 0)(J$.T(329, '5 is equal to the random number', 21, false)));
                            else
                                J$.X1(377, J$.M(369, J$.R(353, 'console', console, 2), 'log', 0)(J$.T(361, '5 is not equal to the random number', 21, false)));
                            var student = J$.X1(433, J$.W(425, 'student', J$.T(417, [J$.T(409, {
                                    name: J$.T(385, 'Costas', 21, false),
                                    age: J$.T(393, 22, 22, false),
                                    height: J$.T(401, undefined, 24, false)
                                }, 11, false)], 10, false), student, 1));
                            var height = J$.X1(465, J$.W(457, 'height', J$.G(449, J$.R(441, 'student', student, 0), 'notHeight', 0), height, 1));
                            J$.X1(497, J$.P(489, J$.R(473, 'student', student, 0), 'age', J$.T(481, undefined, 24, false), 0));
                        } catch (J$e) {
                            J$.Ex(809, J$e);
                        } finally {
                            if (J$.Fr(817))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 505), showExamples, 3));
            J$.X1(761, J$.F(753, J$.R(745, 'showExamples', showExamples, 1), 0)());
        } catch (J$e) {
            J$.Ex(841, J$e);
        } finally {
            if (J$.Sr(849)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
