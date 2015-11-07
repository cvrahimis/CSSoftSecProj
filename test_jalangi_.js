J$.iids = {"8":[18,5,18,28],"9":[4,12,4,19],"10":[5,8,5,22],"17":[4,20,4,21],"18":[6,8,6,15],"25":[4,23,4,25],"26":[14,11,14,22],"33":[4,12,4,26],"34":[18,5,18,28],"41":[4,12,4,26],"42":[28,46,28,53],"49":[4,12,4,26],"50":[28,46,28,55],"57":[5,8,5,11],"58":[28,31,28,56],"65":[5,14,5,22],"66":[28,15,28,58],"73":[5,8,5,22],"81":[5,2,5,23],"89":[6,8,6,11],"97":[6,14,6,15],"105":[6,8,6,15],"113":[6,2,6,16],"121":[9,13,9,20],"129":[9,21,9,22],"137":[9,24,9,26],"145":[9,28,9,30],"153":[9,13,9,31],"161":[9,13,9,31],"169":[9,13,9,31],"177":[12,15,12,23],"185":[12,15,12,23],"193":[12,15,12,23],"201":[13,11,13,20],"209":[13,11,13,20],"217":[13,11,13,20],"225":[14,11,14,17],"233":[14,20,14,22],"241":[14,11,14,22],"249":[14,2,14,23],"257":[17,13,17,14],"265":[17,13,17,14],"273":[17,13,17,14],"281":[18,5,18,9],"289":[18,14,18,21],"297":[18,22,18,23],"305":[18,25,18,27],"313":[18,14,18,28],"321":[19,3,19,10],"329":[19,15,19,48],"337":[19,3,19,49],"339":[19,3,19,14],"345":[19,3,19,50],"353":[21,3,21,10],"361":[21,15,21,52],"369":[21,3,21,53],"371":[21,3,21,14],"377":[21,3,21,54],"385":[1,20,24,2],"393":[1,20,24,2],"401":[1,20,24,2],"409":[1,20,24,2],"417":[1,20,24,2],"425":[1,20,24,2],"433":[1,20,24,2],"441":[1,20,24,2],"449":[1,20,24,2],"457":[1,20,24,2],"465":[28,15,28,18],"473":[28,19,28,23],"481":[28,31,28,35],"489":[28,31,28,44],"491":[28,31,28,42],"497":[28,46,28,49],"505":[28,50,28,53],"513":[28,54,28,55],"521":[28,19,28,58],"523":[28,19,28,29],"529":[28,15,28,58],"537":[28,15,28,58],"545":[29,12,29,15],"553":[29,12,29,15],"561":[29,5,29,16],"569":[26,1,30,2],"577":[26,1,30,2],"585":[26,1,30,2],"593":[26,1,30,2],"601":[26,1,30,2],"609":[32,1,32,13],"617":[32,1,32,15],"625":[32,1,32,16],"633":[1,1,32,16],"641":[1,1,32,16],"649":[26,1,30,2],"657":[1,1,32,16],"665":[18,2,21,54],"673":[1,20,24,2],"681":[1,20,24,2],"689":[26,1,30,2],"697":[26,1,30,2],"705":[1,1,32,16],"713":[1,1,32,16],"nBranches":4,"originalCodeFileName":"/Users/Costasv/Documents/CSSoftSecProj/test.js","instrumentedCodeFileName":"/Users/Costasv/Documents/CSSoftSecProj/test_jalangi_.js","code":"var showExamples = function(){\n\t\n\t//generate NaN\n\tvar num = randNum(0, 10);\n\tnum = num + \"Costas\";\n\tnum = num / 2;\n\t\n\t//function call with more parameters\n\tvar num2 = randNum(0, 10, 50);\n\n\t//concatenate undefined to string\n\tvar costas = \"Costas\";\n\tvar un = undefined;\n\tcastas = costas + un;\n\n\t//compare functions with primitive\n\tvar five = 5;\n\tif(five === randNum(0, 10))\n\t\tconsole.log(\"5 is equal to the random number\");\n\telse\n\t\tconsole.log(\"5 is not equal to the random number\");\n\n\t\n};\n\nfunction randNum(min,max)\n{\n    var num = min+Math.floor((Math.random()*(max-min+1)));\n    return num;\n}\n\nshowExamples();"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(633, '/Users/Costasv/Documents/CSSoftSecProj/test_jalangi_.js', '/Users/Costasv/Documents/CSSoftSecProj/test.js');
            function randNum(min, max) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(569, arguments.callee, this, arguments);
                            arguments = J$.N(577, 'arguments', arguments, 4);
                            min = J$.N(585, 'min', min, 4);
                            max = J$.N(593, 'max', max, 4);
                            J$.N(601, 'num', num, 0);
                            var num = J$.X1(537, J$.W(529, 'num', J$.B(66, '+', J$.R(465, 'min', min, 0), J$.M(521, J$.R(473, 'Math', Math, 2), 'floor', 0)(J$.B(58, '*', J$.M(489, J$.R(481, 'Math', Math, 2), 'random', 0)(), J$.B(50, '+', J$.B(42, '-', J$.R(497, 'max', max, 0), J$.R(505, 'min', min, 0), 0), J$.T(513, 1, 22, false), 0), 0)), 0), num, 1));
                            return J$.X1(561, J$.Rt(553, J$.R(545, 'num', num, 0)));
                        } catch (J$e) {
                            J$.Ex(689, J$e);
                        } finally {
                            if (J$.Fr(697))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(641, 'showExamples', showExamples, 0);
            randNum = J$.N(657, 'randNum', J$.T(649, randNum, 12, false, 569), 0);
            var showExamples = J$.X1(457, J$.W(449, 'showExamples', J$.T(441, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(385, arguments.callee, this, arguments);
                            arguments = J$.N(393, 'arguments', arguments, 4);
                            J$.N(401, 'num', num, 0);
                            J$.N(409, 'num2', num2, 0);
                            J$.N(417, 'costas', costas, 0);
                            J$.N(425, 'un', un, 0);
                            J$.N(433, 'five', five, 0);
                            var num = J$.X1(49, J$.W(41, 'num', J$.F(33, J$.R(9, 'randNum', randNum, 1), 0)(J$.T(17, 0, 22, false), J$.T(25, 10, 22, false)), num, 1));
                            J$.X1(81, num = J$.W(73, 'num', J$.B(10, '+', J$.R(57, 'num', num, 0), J$.T(65, 'Costas', 21, false), 0), num, 0));
                            J$.X1(113, num = J$.W(105, 'num', J$.B(18, '/', J$.R(89, 'num', num, 0), J$.T(97, 2, 22, false), 0), num, 0));
                            var num2 = J$.X1(169, J$.W(161, 'num2', J$.F(153, J$.R(121, 'randNum', randNum, 1), 0)(J$.T(129, 0, 22, false), J$.T(137, 10, 22, false), J$.T(145, 50, 22, false)), num2, 1));
                            var costas = J$.X1(193, J$.W(185, 'costas', J$.T(177, 'Costas', 21, false), costas, 1));
                            var un = J$.X1(217, J$.W(209, 'un', J$.T(201, undefined, 24, false), un, 1));
                            J$.X1(249, castas = J$.W(241, 'castas', J$.B(26, '+', J$.R(225, 'costas', costas, 0), J$.R(233, 'un', un, 0), 0), J$.I(typeof castas === 'undefined' ? undefined : castas), 4));
                            var five = J$.X1(273, J$.W(265, 'five', J$.T(257, 5, 22, false), five, 1));
                            if (J$.X1(665, J$.C(8, J$.B(34, '===', J$.R(281, 'five', five, 0), J$.F(313, J$.R(289, 'randNum', randNum, 1), 0)(J$.T(297, 0, 22, false), J$.T(305, 10, 22, false)), 0))))
                                J$.X1(345, J$.M(337, J$.R(321, 'console', console, 2), 'log', 0)(J$.T(329, '5 is equal to the random number', 21, false)));
                            else
                                J$.X1(377, J$.M(369, J$.R(353, 'console', console, 2), 'log', 0)(J$.T(361, '5 is not equal to the random number', 21, false)));
                        } catch (J$e) {
                            J$.Ex(673, J$e);
                        } finally {
                            if (J$.Fr(681))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 385), showExamples, 3));
            J$.X1(625, J$.F(617, J$.R(609, 'showExamples', showExamples, 1), 0)());
        } catch (J$e) {
            J$.Ex(705, J$e);
        } finally {
            if (J$.Sr(713)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
