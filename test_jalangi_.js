J$.iids = {"9":[2,12,2,19],"10":[3,8,3,22],"17":[2,20,2,21],"18":[4,8,4,15],"25":[2,23,2,25],"26":[9,46,9,53],"33":[2,12,2,26],"34":[9,46,9,55],"41":[2,12,2,26],"42":[9,31,9,56],"49":[2,12,2,26],"50":[9,15,9,58],"57":[3,8,3,11],"65":[3,14,3,22],"73":[3,8,3,22],"81":[3,2,3,23],"89":[4,8,4,11],"97":[4,14,4,15],"105":[4,8,4,15],"113":[4,2,4,16],"121":[1,19,5,2],"129":[1,19,5,2],"137":[1,19,5,2],"145":[1,19,5,2],"153":[1,19,5,2],"161":[1,19,5,2],"169":[9,15,9,18],"177":[9,19,9,23],"185":[9,31,9,35],"193":[9,31,9,44],"195":[9,31,9,42],"201":[9,46,9,49],"209":[9,50,9,53],"217":[9,54,9,55],"225":[9,19,9,58],"227":[9,19,9,29],"233":[9,15,9,58],"241":[9,15,9,58],"249":[10,12,10,15],"257":[10,12,10,15],"265":[10,5,10,16],"273":[7,1,11,2],"281":[7,1,11,2],"289":[7,1,11,2],"297":[7,1,11,2],"305":[7,1,11,2],"313":[13,1,13,12],"321":[13,1,13,14],"329":[13,1,13,15],"337":[1,1,13,15],"345":[1,1,13,15],"353":[7,1,11,2],"361":[1,1,13,15],"369":[1,19,5,2],"377":[1,19,5,2],"385":[7,1,11,2],"393":[7,1,11,2],"401":[1,1,13,15],"409":[1,1,13,15],"nBranches":2,"originalCodeFileName":"/Users/Costasv/Documents/CSSoftSecProj/test.js","instrumentedCodeFileName":"/Users/Costasv/Documents/CSSoftSecProj/test_jalangi_.js","code":"var generateNaN = function(){\n\tvar num = randNum(0, 10);\n\tnum = num + \"Costas\";\n\tnum = num / 2;\n};\n\nfunction randNum(min,max)\n{\n    var num = min+Math.floor((Math.random()*(max-min+1)));\n    return num;\n}\n\ngenerateNaN();"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(337, '/Users/Costasv/Documents/CSSoftSecProj/test_jalangi_.js', '/Users/Costasv/Documents/CSSoftSecProj/test.js');
            function randNum(min, max) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(273, arguments.callee, this, arguments);
                            arguments = J$.N(281, 'arguments', arguments, 4);
                            min = J$.N(289, 'min', min, 4);
                            max = J$.N(297, 'max', max, 4);
                            J$.N(305, 'num', num, 0);
                            var num = J$.X1(241, J$.W(233, 'num', J$.B(50, '+', J$.R(169, 'min', min, 0), J$.M(225, J$.R(177, 'Math', Math, 2), 'floor', 0)(J$.B(42, '*', J$.M(193, J$.R(185, 'Math', Math, 2), 'random', 0)(), J$.B(34, '+', J$.B(26, '-', J$.R(201, 'max', max, 0), J$.R(209, 'min', min, 0), 0), J$.T(217, 1, 22, false), 0), 0)), 0), num, 1));
                            return J$.X1(265, J$.Rt(257, J$.R(249, 'num', num, 0)));
                        } catch (J$e) {
                            J$.Ex(385, J$e);
                        } finally {
                            if (J$.Fr(393))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(345, 'generateNaN', generateNaN, 0);
            randNum = J$.N(361, 'randNum', J$.T(353, randNum, 12, false, 273), 0);
            var generateNaN = J$.X1(161, J$.W(153, 'generateNaN', J$.T(145, function () {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(121, arguments.callee, this, arguments);
                            arguments = J$.N(129, 'arguments', arguments, 4);
                            J$.N(137, 'num', num, 0);
                            var num = J$.X1(49, J$.W(41, 'num', J$.F(33, J$.R(9, 'randNum', randNum, 1), 0)(J$.T(17, 0, 22, false), J$.T(25, 10, 22, false)), num, 1));
                            J$.X1(81, num = J$.W(73, 'num', J$.B(10, '+', J$.R(57, 'num', num, 0), J$.T(65, 'Costas', 21, false), 0), num, 0));
                            J$.X1(113, num = J$.W(105, 'num', J$.B(18, '/', J$.R(89, 'num', num, 0), J$.T(97, 2, 22, false), 0), num, 0));
                        } catch (J$e) {
                            J$.Ex(369, J$e);
                        } finally {
                            if (J$.Fr(377))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 121), generateNaN, 3));
            J$.X1(329, J$.F(321, J$.R(313, 'generateNaN', generateNaN, 1), 0)());
        } catch (J$e) {
            J$.Ex(401, J$e);
        } finally {
            if (J$.Sr(409)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
