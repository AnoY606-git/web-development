window.onload = () => {
    const canvas = document.getElementById('myCanvas');

    const legs = canvas.getContext('2d');
    legs.moveTo(139, 479);
    legs.lineTo(139, 521);
    legs.lineTo(339, 521);
    legs.lineTo(339, 479);
    legs.lineTo(139, 479);
    legs.fillStyle = '#3a73c4';
    legs.fill();

    const handLeft = canvas.getContext('2d');
    handLeft.beginPath();
    handLeft.ellipse(120, 409, 50, 10, 2 * Math.PI / 3.2, 0, 2 * Math.PI);
    handLeft.fillStyle = '#ce6d5c';
    handLeft.fill();

    const handRight = canvas.getContext('2d');
    handRight.beginPath();
    handRight.ellipse(345, 405, 50, 10, 3 * Math.PI / 7.8, 0, 2 * Math.PI);
    handRight.fillStyle = '#ce6d5c';
    handRight.fill();

    const bodyDown = canvas.getContext('2d');
    bodyDown.beginPath();
    bodyDown.ellipse(233, 482, 105, 20, Math.PI, 0, 2 * Math.PI);
    bodyDown.fillStyle = '#ce6d5c';
    bodyDown.fill();

    const body = canvas.getContext('2d');
    body.beginPath();
    body.moveTo(137, 360);
    body.lineTo(100, 452);
    body.lineTo(128, 479);
    body.lineTo(337, 480);
    body.lineTo(361, 450);
    body.lineTo(326, 361);
    body.lineTo(137, 360);
    body.fillStyle = '#ce6d5c';
    body.fill();

    const collarBorderLeft = canvas.getContext('2d');
    collarBorderLeft.beginPath();
    collarBorderLeft.ellipse(185, 384, 55, 15, Math.PI / 7, 0, 2 * Math.PI);
    collarBorderLeft.strokeStyle = '#ba333a';
    collarBorderLeft.stroke();

    const collarBorderRight = canvas.getContext('2d');
    collarBorderRight.beginPath();
    collarBorderRight.ellipse(284, 385, 55, 15, 6 * Math.PI / 7, 0, 2 * Math.PI);
    collarBorderRight.strokeStyle = '#ba333a';
    collarBorderRight.stroke();

    const collarLeft = canvas.getContext('2d');
    collarLeft.beginPath();
    collarLeft.ellipse(185, 384, 55, 15, Math.PI / 7, 0, 2 * Math.PI);
    collarLeft.fillStyle = '#ff1f41';
    collarLeft.fill();

    const collarRight = canvas.getContext('2d');
    collarRight.beginPath();
    collarRight.ellipse(284, 385, 55, 15, 6 * Math.PI / 7, 0, 2 * Math.PI);
    collarRight.fillStyle = '#ff1f41';
    collarRight.fill();

    const head = canvas.getContext('2d');
    head.beginPath();
    head.arc(230, 250, 145, 0, 2 * Math.PI, true);
    head.fillStyle = '#ffefc4';
    head.fill();

    const cap = canvas.getContext('2d');
    cap.beginPath();
    cap.arc(230, 240, 145, 1.96 * Math.PI, 1.06 * Math.PI, true);
    cap.fillStyle = '#3973c4';
    cap.fill();

    const pompon1 = canvas.getContext('2d');
    pompon1.beginPath();
    pompon1.moveTo(204, 128);
    pompon1.lineTo(223, 68);
    pompon1.lineWidth = 7;
    pompon1.strokeStyle = '#fc2141';
    pompon1.stroke();

    const pompon2 = canvas.getContext('2d');
    pompon2.beginPath();
    pompon2.moveTo(215, 128);
    pompon2.lineTo(210, 69);
    pompon2.lineWidth = 7;
    pompon2.strokeStyle = '#fc2141';
    pompon2.stroke();

    const pompon3 = canvas.getContext('2d');
    pompon3.beginPath();
    pompon3.moveTo(194, 120);
    pompon3.lineTo(236, 76);
    pompon3.lineWidth = 7;
    pompon3.strokeStyle = '#fc2141';
    pompon3.stroke();

    const pompon4 = canvas.getContext('2d');
    pompon4.beginPath();
    pompon4.moveTo(186, 110);
    pompon4.lineTo(244, 82);
    pompon4.lineWidth = 7;
    pompon4.strokeStyle = '#fc2141';
    pompon4.stroke();

    const pompon5 = canvas.getContext('2d');
    pompon5.beginPath();
    pompon5.moveTo(183, 99);
    pompon5.lineTo(246, 97);
    pompon5.lineWidth = 7;
    pompon5.strokeStyle = '#fc2141';
    pompon5.stroke();

    const pompon6 = canvas.getContext('2d');
    pompon6.beginPath();
    pompon6.moveTo(184, 89);
    pompon6.lineTo(247, 108);
    pompon6.lineWidth = 7;
    pompon6.strokeStyle = '#fc2141';
    pompon6.stroke();

    const pompon7 = canvas.getContext('2d');
    pompon7.beginPath();
    pompon7.moveTo(190, 77);
    pompon7.lineTo(238, 122);
    pompon7.lineWidth = 7;
    pompon7.strokeStyle = '#fc2141';
    pompon7.stroke();

    const pompon8 = canvas.getContext('2d');
    pompon8.beginPath();
    pompon8.moveTo(200, 70);
    pompon8.lineTo(227, 126);
    pompon8.lineWidth = 7;
    pompon8.strokeStyle = '#fc2141';
    pompon8.stroke();

    const eyeLeft = canvas.getContext('2d');
    eyeLeft.beginPath();
    eyeLeft.ellipse(190, 265, 40, 48, Math.PI / 5.6, 0, 2 * Math.PI);
    eyeLeft.fillStyle = '#fffeff';
    eyeLeft.fill();

    const eyeRight = canvas.getContext('2d');
    eyeRight.beginPath();
    eyeRight.ellipse(272, 265, 40, 48, 1.8 * Math.PI, 0, 2 * Math.PI);
    eyeRight.fillStyle = '#fffeff';
    eyeRight.fill();

    const elastic = canvas.getContext('2d');
    elastic.beginPath();
    elastic.ellipse(230, 305, 250, 100, -0.04, 3.9 * Math.PI / 3, 5.11 * Math.PI / 3);   
    elastic.lineWidth = 30;
    elastic.strokeStyle = '#fc2141';
    elastic.stroke();

    const pupilLeft = canvas.getContext('2d');
    pupilLeft.beginPath();
    pupilLeft.arc(204, 267, 5, 0, 2 * Math.PI, true);
    pupilLeft.fillStyle = '#262626';
    pupilLeft.fill();

    const pupilRight = canvas.getContext('2d');
    pupilRight.beginPath();
    pupilRight.arc(253, 265, 5, 0, 2 * Math.PI, true);
    pupilRight.fillStyle = '#262626';
    pupilRight.fill();

    const eyebrowLeft = canvas.getContext('2d');
    eyebrowLeft.beginPath();
    eyebrowLeft.moveTo(136, 233);
    eyebrowLeft.lineTo(165, 206);
    eyebrowLeft.lineWidth = 4;
    eyebrowLeft.strokeStyle = '#643a3c';
    eyebrowLeft.stroke();

    const eyebrowRight = canvas.getContext('2d');
    eyebrowRight.beginPath();
    eyebrowRight.moveTo(282, 202);
    eyebrowRight.lineTo(314, 224);
    eyebrowRight.lineWidth = 4;
    eyebrowRight.strokeStyle = '#643a3c';
    eyebrowRight.stroke();

    const mouth = canvas.getContext('2d');
    mouth.beginPath();
    mouth.moveTo(199, 341);
    mouth.lineTo(239, 372);
    mouth.lineTo(275, 340);
    mouth.fill();

    const tooth1 = canvas.getContext('2d');
    tooth1.beginPath();
    tooth1.moveTo(205, 345);
    tooth1.lineTo(218, 343);
    tooth1.lineTo(218, 350);
    tooth1.lineTo(213, 349);
    tooth1.lineTo(205, 345);
    tooth1.fillStyle = '#fffeff';
    tooth1.fill();

    const tooth2 = canvas.getContext('2d');
    tooth2.beginPath();
    tooth2.moveTo(220, 343);
    tooth2.lineTo(236, 343);
    tooth2.lineTo(236, 350);
    tooth2.lineTo(220, 350);
    tooth2.lineTo(220, 343);
    tooth2.fillStyle = '#fffeff';
    tooth2.fill();

    const tooth3 = canvas.getContext('2d');
    tooth3.beginPath();
    tooth3.moveTo(241, 343);
    tooth3.lineTo(257, 343);
    tooth3.lineTo(251, 353);
    tooth3.lineTo(240, 353);
    tooth3.lineTo(241, 343);
    tooth3.fillStyle = '#fffeff';
    tooth3.fill();

    const tooth4 = canvas.getContext('2d');
    tooth4.beginPath();
    tooth4.moveTo(258, 343);
    tooth4.lineTo(270, 343);
    tooth4.lineTo(259, 353);
    tooth4.lineTo(254, 353);
    tooth4.lineTo(258, 343);
    tooth4.fillStyle = '#fffeff';
    tooth4.fill(); 

    const handLeftBorder = canvas.getContext('2d');
    handLeftBorder.beginPath();
    handLeftBorder.moveTo(138, 443);
    handLeftBorder.lineTo(143, 419);
    handLeftBorder.strokeStyle = '#743524';
    handLeftBorder.lineWidth = 2;
    handLeftBorder.stroke(); 

    const handRightBorder = canvas.getContext('2d');
    handRightBorder.beginPath();
    handRightBorder.moveTo(328, 451);
    handRightBorder.lineTo(322, 421);
    handRightBorder.strokeStyle = '#743524';
    handRightBorder.lineWidth = 2;
    handRightBorder.stroke(); 

    const bodyLine = canvas.getContext('2d');
    bodyLine.beginPath();
    bodyLine.moveTo(239, 411);
    bodyLine.lineTo(233, 501);
    bodyLine.strokeStyle = '#743524';
    bodyLine.lineWidth = 2;
    bodyLine.stroke(); 

    const button1 = canvas.getContext('2d');
    button1.beginPath();
    button1.arc(224, 419, 4, 0, 2 * Math.PI, true);
    button1.fillStyle = '#743524';
    button1.fill();

    const button2 = canvas.getContext('2d');
    button2.beginPath();
    button2.arc(223, 449, 4, 0, 2 * Math.PI, true);
    button2.fillStyle = '#743524';
    button2.fill();

    const button3 = canvas.getContext('2d');
    button3.beginPath();
    button3.arc(222, 481, 4, 0, 2 * Math.PI, true);
    button3.fillStyle = '#743524';
    button3.fill();

    const mittensLeft = canvas.getContext('2d');
    mittensLeft.beginPath();
    mittensLeft.arc(117, 462, 25, 0, 2 * Math.PI, true);
    mittensLeft.fillStyle = '#fb2143';
    mittensLeft.fill();

    const bigFingerBorderLeft = canvas.getContext('2d');
    bigFingerBorderLeft.beginPath();
    bigFingerBorderLeft.arc(135, 452, 10, 0, 2 * Math.PI, true);
    bigFingerBorderLeft.lineWidth = 2;
    bigFingerBorderLeft.strokeStyle = '#c82230';
    bigFingerBorderLeft.stroke();

    const bigFingerLeft = canvas.getContext('2d');
    bigFingerLeft.beginPath();
    bigFingerLeft.arc(135, 452, 9, 0, 2 * Math.PI, true);
    bigFingerLeft.lineWidth = 2;
    bigFingerLeft.fillStyle = '#fb2143';
    bigFingerLeft.fill();

    const mittensRight = canvas.getContext('2d');
    mittensRight.beginPath();
    mittensRight.arc(348, 466, 25, 0, 2 * Math.PI, true);
    mittensRight.fillStyle = '#fb2143';
    mittensRight.fill();

    const bigFingerBorderRight = canvas.getContext('2d');
    bigFingerBorderRight.beginPath();
    bigFingerBorderRight.arc(331, 460, 10, 0, 2 * Math.PI, true);
    bigFingerBorderRight.lineWidth = 2;
    bigFingerBorderRight.strokeStyle = '#c82230';
    bigFingerBorderRight.stroke();

    const bigFingerRight = canvas.getContext('2d');
    bigFingerRight.beginPath();
    bigFingerRight.arc(331, 460, 9, 0, 2 * Math.PI, true);
    bigFingerRight.lineWidth = 2;
    bigFingerRight.fillStyle = '#fb2143';
    bigFingerRight.fill();

    const footLeft = canvas.getContext('2d');
    footLeft.beginPath();
    footLeft.ellipse(184, 524, 60, 10, Math.PI, 0, Math.PI);
    footLeft.fillStyle = '#323234';
    footLeft.fill();

    const footRight = canvas.getContext('2d');
    footRight.beginPath();
    footRight.ellipse(290, 526, 60, 10, Math.PI, 0, Math.PI);
    footRight.fillStyle = '#323234';
    footRight.fill();

    const foot = canvas.getContext('2d');
    foot.beginPath();
    foot.ellipse(577, 106, 60, 10, Math.PI, 0, Math.PI);
    foot.fillStyle = '#323234';
    foot.fill();

    // hero 2

    const hero2Legs = canvas.getContext('2d');
    hero2Legs.moveTo(484, 480);
    hero2Legs.lineTo(483, 517);
    hero2Legs.lineTo(676, 518);
    hero2Legs.lineTo(676, 476);
    hero2Legs.lineTo(484, 480);
    hero2Legs.fillStyle = '#3a73c4';
    hero2Legs.fill();

    const hero2FootLeft = canvas.getContext('2d');
    hero2FootLeft.beginPath();
    hero2FootLeft.ellipse(529, 517, 60, 5, Math.PI, 0, 2 * Math.PI);
    hero2FootLeft.fillStyle = '#323234';
    hero2FootLeft.fill();

    const hero2FootRight = canvas.getContext('2d');
    hero2FootRight.beginPath();
    hero2FootRight.ellipse(635, 520, 60, 5, Math.PI, 0, 2 * Math.PI);
    hero2FootRight.fillStyle = '#323234';
    hero2FootRight.fill();

    const hero2HandLeft = canvas.getContext('2d');
    hero2HandLeft.beginPath();
    hero2HandLeft.ellipse(465, 397, 50, 10, 2 * Math.PI / 3.1, 0, 2 * Math.PI);
    hero2HandLeft.fillStyle = '#fd6114';
    hero2HandLeft.fill();

    const hero2HandRight = canvas.getContext('2d');
    hero2HandRight.beginPath();
    hero2HandRight.ellipse(694, 404, 54, 10, 3 * Math.PI / 8, 0, 2 * Math.PI);
    hero2HandRight.fillStyle = '#fd6114';
    hero2HandRight.fill();

    const hero2BodyDown = canvas.getContext('2d');
    hero2BodyDown.beginPath();
    hero2BodyDown.ellipse(578, 473, 105, 20, Math.PI, 0, 2 * Math.PI);
    hero2BodyDown.fillStyle = '#fd6114';
    hero2BodyDown.fill();

    const hero2Body = canvas.getContext('2d');
    hero2Body.beginPath();
    hero2Body.moveTo(482, 349);
    hero2Body.lineTo(442, 438);
    hero2Body.lineTo(478, 476);
    hero2Body.lineTo(681, 471);
    hero2Body.lineTo(712, 450);
    hero2Body.lineTo(679, 357);
    hero2Body.lineTo(482, 349);
    hero2Body.fillStyle = '#fd6114';
    hero2Body.fill();
    
    const hero2CollarBorderLeft = canvas.getContext('2d');
    hero2CollarBorderLeft.beginPath();
    hero2CollarBorderLeft.ellipse(535, 372, 55, 15, Math.PI / 8, 0, 2 * Math.PI);
    hero2CollarBorderLeft.strokeStyle = '#3ca830';
    hero2CollarBorderLeft.stroke();

    const hero2CollarBorderRight = canvas.getContext('2d');
    hero2CollarBorderRight.beginPath();
    hero2CollarBorderRight.ellipse(636, 370, 55, 15, 6 * Math.PI / 7, 0, 2 * Math.PI);
    hero2CollarBorderRight.strokeStyle = '#3ca830';
    hero2CollarBorderRight.stroke();

    const hero2CollarLeft = canvas.getContext('2d');
    hero2CollarLeft.beginPath();
    hero2CollarLeft.ellipse(535, 372, 55, 15, Math.PI / 7, 0, 2 * Math.PI);
    hero2CollarLeft.fillStyle = '#4dc53f';
    hero2CollarLeft.fill();

    const hero2CollarRight = canvas.getContext('2d');
    hero2CollarRight.beginPath();
    hero2CollarRight.ellipse(636, 370, 55, 15, 6 * Math.PI / 7, 0, 2 * Math.PI);
    hero2CollarRight.fillStyle = '#4dc53f';
    hero2CollarRight.fill();

    const hero2Head = canvas.getContext('2d');
    hero2Head.beginPath();
    hero2Head.arc(580, 240, 145, 0, 2 * Math.PI, true);
    hero2Head.fillStyle = '#ffefc4';
    hero2Head.fill();

    const hero2Mouth = canvas.getContext('2d');
    hero2Mouth.beginPath();
    hero2Mouth.moveTo(543, 328);
    hero2Mouth.lineTo(632, 326);
    hero2Mouth.lineTo(589, 363);
    hero2Mouth.fillStyle = 'black';
    hero2Mouth.fill();

    const hero2Tooth1 = canvas.getContext('2d');
    hero2Tooth1.beginPath();
    hero2Tooth1.moveTo(550, 333);
    hero2Tooth1.lineTo(563, 331);
    hero2Tooth1.lineTo(563, 338);
    hero2Tooth1.lineTo(558, 337);
    hero2Tooth1.lineTo(550, 333);
    hero2Tooth1.fillStyle = '#fffeff';
    hero2Tooth1.fill();

    const hero2Tooth2 = canvas.getContext('2d');
    hero2Tooth2.beginPath();
    hero2Tooth2.moveTo(570, 331);
    hero2Tooth2.lineTo(586, 331);
    hero2Tooth2.lineTo(586, 338);
    hero2Tooth2.lineTo(570, 338);
    hero2Tooth2.lineTo(570, 331);
    hero2Tooth2.fillStyle = '#fffeff';
    hero2Tooth2.fill();

    const hero2Tooth3 = canvas.getContext('2d');
    hero2Tooth3.beginPath();
    hero2Tooth3.moveTo(591, 331);
    hero2Tooth3.lineTo(610, 331);
    hero2Tooth3.lineTo(601, 341);
    hero2Tooth3.lineTo(590, 341);
    hero2Tooth3.lineTo(591, 331);
    hero2Tooth3.fillStyle = '#fffeff';
    hero2Tooth3.fill();

    const hero2Tooth4 = canvas.getContext('2d');
    hero2Tooth4.beginPath();
    hero2Tooth4.moveTo(608, 331);
    hero2Tooth4.lineTo(620, 331);
    hero2Tooth4.lineTo(609, 341);
    hero2Tooth4.lineTo(604, 341);
    hero2Tooth4.lineTo(608, 331);
    hero2Tooth4.fillStyle = '#fffeff';
    hero2Tooth4.fill();

    const hero2EyeLeft = canvas.getContext('2d');
    hero2EyeLeft.beginPath();
    hero2EyeLeft.ellipse(540, 245, 40, 48, Math.PI / 5.6, 0, 2 * Math.PI);
    hero2EyeLeft.fillStyle = '#fffeff';
    hero2EyeLeft.fill();

    const hero2EyeRight = canvas.getContext('2d');
    hero2EyeRight.beginPath();
    hero2EyeRight.ellipse(622, 245, 40, 48, 1.8 * Math.PI, 0, 2 * Math.PI);
    hero2EyeRight.fillStyle = '#fffeff';
    hero2EyeRight.fill();

    const hero2PupilLeft = canvas.getContext('2d');
    hero2PupilLeft.beginPath();
    hero2PupilLeft.arc(553, 246, 5, 0, 2 * Math.PI, true);
    hero2PupilLeft.fillStyle = '#262626';
    hero2PupilLeft.fill();

    const hero2PupilRight = canvas.getContext('2d');
    hero2PupilRight.beginPath();
    hero2PupilRight.arc(602, 246, 5, 0, 2 * Math.PI, true);
    hero2PupilRight.fillStyle = '#262626';
    hero2PupilRight.fill();

    const hero2Cap = canvas.getContext('2d');
    hero2Cap.beginPath();
    hero2Cap.moveTo(434, 186);
    hero2Cap.lineTo(436, 101);
    hero2Cap.lineTo(458, 71);
    hero2Cap.lineTo(704, 73);
    hero2Cap.lineTo(726, 93);
    hero2Cap.lineTo(727, 191);
    hero2Cap.lineTo(434, 186);
    hero2Cap.fillStyle = '#4ec33e';
    hero2Cap.fill();

    const hero2AnlgeOfCapLeft = canvas.getContext('2d');
    hero2AnlgeOfCapLeft.beginPath();
    hero2AnlgeOfCapLeft.arc(459, 94, 23, 0, 2 * Math.PI, true);
    hero2AnlgeOfCapLeft.fillStyle = '#4ec33e';
    hero2AnlgeOfCapLeft.fill();

    const hero2AnlgeOfCapRigth = canvas.getContext('2d');
    hero2AnlgeOfCapRigth.beginPath();
    hero2AnlgeOfCapRigth.arc(703, 96, 23, 0, 2 * Math.PI, true);
    hero2AnlgeOfCapRigth.fillStyle = '#4ec33e';
    hero2AnlgeOfCapRigth.fill();

    const hero2EarLeft = canvas.getContext('2d');
    hero2EarLeft.beginPath();
    hero2EarLeft.ellipse(432, 240, 75, 26, Math.PI / 1.6, 0, 2 * Math.PI);
    hero2EarLeft.fillStyle = '#4dc638';
    hero2EarLeft.fill();

    const hero2EarRight = canvas.getContext('2d');
    hero2EarRight.beginPath();
    hero2EarRight.ellipse(730, 243, 75, 26, Math.PI / 2.6, 0, 2 * Math.PI);
    hero2EarRight.fillStyle = '#4dc638';
    hero2EarRight.fill();

    const hero2EarLeftBorder = canvas.getContext('2d');
    hero2EarLeftBorder.beginPath();
    hero2EarLeftBorder.ellipse(432, 240, 75, 26, Math.PI / 1.6, 0, 2 * Math.PI);
    hero2EarLeftBorder.strokeStyle = '#3ca830';
    hero2EarLeftBorder.stroke();

    const hero2EarRightBorder = canvas.getContext('2d');
    hero2EarRightBorder.beginPath();
    hero2EarRightBorder.ellipse(730, 243, 75, 26, Math.PI / 2.6, 0, 2 * Math.PI);
    hero2EarRightBorder.strokeStyle = '#3ca830';
    hero2EarRightBorder.stroke();

    const hero2DarkSide = canvas.getContext('2d');
    hero2DarkSide.beginPath();
    hero2DarkSide.moveTo(708, 195);
    hero2DarkSide.lineTo(708, 208);
    hero2DarkSide.lineTo(645, 194);
    hero2DarkSide.lineTo(533, 193);
    hero2DarkSide.lineTo(456, 206);
    hero2DarkSide.lineTo(455, 194);
    hero2DarkSide.lineTo(456, 195);
    hero2DarkSide.lineTo(456, 123);
    hero2DarkSide.lineTo(708, 127);
    hero2DarkSide.lineTo(708, 195);
    hero2DarkSide.fillStyle = '#00ad53';
    hero2DarkSide.fill();  

    const hero2yebrowLeft = canvas.getContext('2d');
    hero2yebrowLeft.beginPath();
    hero2yebrowLeft.moveTo(498, 200);
    hero2yebrowLeft.lineTo(537, 176);
    hero2yebrowLeft.lineWidth = 4;
    hero2yebrowLeft.strokeStyle = '#643a3c';
    hero2yebrowLeft.stroke();

    const hero2EyebrowRight = canvas.getContext('2d');
    hero2EyebrowRight.beginPath();
    hero2EyebrowRight.moveTo(620, 179);
    hero2EyebrowRight.lineTo(662, 198);
    hero2EyebrowRight.lineWidth = 4;
    hero2EyebrowRight.strokeStyle = '#643a3c';
    hero2EyebrowRight.stroke();

    const hero2MittensLeft = canvas.getContext('2d');
    hero2MittensLeft.beginPath();
    hero2MittensLeft.arc(458, 458, 25, 0, 2 * Math.PI, true);
    hero2MittensLeft.fillStyle = '#4dc53f';
    hero2MittensLeft.fill();

    const hero2BigFingerBorderLeft = canvas.getContext('2d');
    hero2BigFingerBorderLeft.beginPath();
    hero2BigFingerBorderLeft.arc(476, 448, 10, 0, 2 * Math.PI, true);
    hero2BigFingerBorderLeft.lineWidth = 2;
    hero2BigFingerBorderLeft.strokeStyle = '#3ca830';
    hero2BigFingerBorderLeft.stroke();

    const hero2BigFingerLeft = canvas.getContext('2d');
    hero2BigFingerLeft.beginPath();
    hero2BigFingerLeft.arc(476, 448, 9, 0, 2 * Math.PI, true);
    hero2BigFingerLeft.lineWidth = 2;
    hero2BigFingerLeft.fillStyle = '#4dc53f';
    hero2BigFingerLeft.fill();

    const hero2MittensRight = canvas.getContext('2d');
    hero2MittensRight.beginPath();
    hero2MittensRight.arc(701, 465, 25, 0, 2 * Math.PI, true);
    hero2MittensRight.fillStyle = '#4dc53f';
    hero2MittensRight.fill();

    const hero2BigFingerBorderRight = canvas.getContext('2d');
    hero2BigFingerBorderRight.beginPath();
    hero2BigFingerBorderRight.arc(684, 458, 10, 0, 2 * Math.PI, true);
    hero2BigFingerBorderRight.lineWidth = 2;
    hero2BigFingerBorderRight.strokeStyle = '#3ca830';
    hero2BigFingerBorderRight.stroke();

    const hero2BigFingerRight = canvas.getContext('2d');
    hero2BigFingerRight.beginPath();
    hero2BigFingerRight.arc(684, 458, 9, 0, 2 * Math.PI, true);
    hero2BigFingerRight.lineWidth = 2;
    hero2BigFingerRight.fillStyle = '#4dc53f';
    hero2BigFingerRight.fill();

    const hero2HandLeftBorder = canvas.getContext('2d');
    hero2HandLeftBorder.beginPath();
    hero2HandLeftBorder.moveTo(486, 413);
    hero2HandLeftBorder.lineTo(478, 439);
    hero2HandLeftBorder.strokeStyle = '#743524';
    hero2HandLeftBorder.lineWidth = 2;
    hero2HandLeftBorder.stroke(); 

    const hero2HandRightBorder = canvas.getContext('2d');
    hero2HandRightBorder.beginPath();
    hero2HandRightBorder.moveTo(677, 450);
    hero2HandRightBorder.lineTo(673, 411);
    hero2HandRightBorder.strokeStyle = '#743524';
    hero2HandRightBorder.lineWidth = 2;
    hero2HandRightBorder.stroke(); 

    const hero2BodyLine = canvas.getContext('2d');
    hero2BodyLine.beginPath();
    hero2BodyLine.moveTo(582, 493);
    hero2BodyLine.lineTo(584, 393);
    hero2BodyLine.strokeStyle = '#743524';
    hero2BodyLine.lineWidth = 2;
    hero2BodyLine.stroke(); 

    const hero2PocketLeft = canvas.getContext('2d');
    hero2PocketLeft.beginPath();
    hero2PocketLeft.moveTo(554, 410);
    hero2PocketLeft.lineTo(556, 456);
    hero2PocketLeft.lineTo(516, 456);
    hero2PocketLeft.lineTo(517, 412);
    hero2PocketLeft.lineTo(554, 410);
    hero2PocketLeft.lineTo(536, 433);
    hero2PocketLeft.lineTo(517, 412);
    hero2PocketLeft.strokeStyle = '#743524';
    hero2PocketLeft.lineWidth = 3;
    hero2PocketLeft.stroke();

    const hero2PocketRight = canvas.getContext('2d');
    hero2PocketRight.beginPath();
    hero2PocketRight.moveTo(648, 409);
    hero2PocketRight.lineTo(650, 454);
    hero2PocketRight.lineTo(609, 454);
    hero2PocketRight.lineTo(610, 410);
    hero2PocketRight.lineTo(648, 409);
    hero2PocketRight.lineTo(629, 428);
    hero2PocketRight.lineTo(610, 410);
    hero2PocketRight.strokeStyle = '#743524';
    hero2PocketRight.lineWidth = 3;
    hero2PocketRight.stroke();   
}