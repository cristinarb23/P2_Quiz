// JavaScript source code
// cristina 

const fs = require("fs");

const DB_FILENAME = "quizzes.json";

let quizzes = [
 {
    question:"Capital de Italia",
    answer: "Roma"
 },
 {
    question:"Capital de Francia",
    answer: "Paris"
 },
 {
    question:"Capital de Espa�a",
    answer: "Madrid"
  },
  {
    question:"Capital de Portugal",
    answer: "Lisboa"
  }
];

const load = () => {
	
};

const save = () => {
    fs.writeFile(DB_FILENAME,
	JSON.stringify(quizzes),
	err => {
		if (err) throw err;
	});
};

exports.count = () =>{ quizzes.length;};

exports.add = (question, answer) => {

 quizzes.push({
   question: (question ||"").trim(),
   answer: (answer ||"").trim()
   });
   save();
};

exports.update = (id, question, answer) => {
    const quiz = quizzes[id];
	if( typeof quiz === "undefined"){
	  throw new Error(`El valor del parametro id no es valido`);
	  } 
	  quizzes.splice(id, 1, {
	     question: (question ||"").trim(),
		 answer: (answer ||"").trim()
		 });
		 save();
};


exports.getAll = () => JSON.parse(JSON.stringify(quizzes));

exports.getByIndex = id => {
  const quiz = quizzes [id];
  if (typeof quiz === "undefined"){
      throw new Error(`el valor del parametro id no es correcto`);
	  }
  return JSON.parse(JSON.stringify(quiz));
};

exports.deleteByIndex = id => {
  const quiz = quizzes [id];
  if (typeof quiz === "undefined"){
      throw new Error(` el valor del parametro id no es correcto`);
	  }
 quizzes.splice(id,1);
 save();
};

load();