const deburr = require('lodash.deburr');
const User = require('./../models/userModel');
const Skill = require('./../models/skillModel');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const students = [
    {
        "firstName": "Yasmine",
        "lastName": "ADRAR"
    },
    {
        "firstName": "Quentin",
        "lastName": "AIMÉ"
    },
    {
        "firstName": "Federica",
        "lastName": "ALFANO"
    },
    {
        "firstName": "Maël",
        "lastName": "ALLANO"
    },
    {
        "firstName": "Hichem",
        "lastName": "AMAR"
    },
    {
        "firstName": "Adrien",
        "lastName": "BANNWARTH"
    },
    {
        "firstName": "Antoine",
        "lastName": "BEAUDOIRE"
    },
    {
        "firstName": "Théo",
        "lastName": "BENOIT"
    },
    {
        "firstName": "Alex",
        "lastName": "BLANDFORD"
    },
    {
        "firstName": "Mathieu",
        "lastName": "BLOK"
    },
    {
        "firstName": "Nancy",
        "lastName": "CAMPBELL"
    },
    {
        "firstName": "Christophe",
        "lastName": "CHARLEBOIS"
    },
    {
        "firstName": "Maxime",
        "lastName": "CHARPENTIER"
    },
    {
        "firstName": "Aymeline",
        "lastName": "CHEMIN"
    },
    {
        "firstName": "Guillaume",
        "lastName": "CORNET"
    },
    {
        "firstName": "Corentin",
        "lastName": "CROIZAT"
    },
    {
        "firstName": "Mélanie",
        "lastName": "DA COSTA"
    },
    {
        "firstName": "Mickael",
        "lastName": "DE JESUS"
    },
    {
        "firstName": "Clara",
        "lastName": "DE LANGENHAGEN"
    },
    {
        "firstName": "Alexandre",
        "lastName": "DELALOY"
    },
    {
        "firstName": "Thomas",
        "lastName": "DERUEL"
    },
    {
        "firstName": "Andy",
        "lastName": "DODAKAL"
    },
    {
        "firstName": "Jean-Yves",
        "lastName": "DOGO"
    },
    {
        "firstName": "Rémi",
        "lastName": "DOREAU"
    },
    {
        "firstName": "Rainald",
        "lastName": "DURAND"
    },
    {
        "firstName": "Alice",
        "lastName": "FABRE"
    },
    {
        "firstName": "Amaury",
        "lastName": "FAVERIEL"
    },
    {
        "firstName": "Thomas",
        "lastName": "FRANJA"
    },
    {
        "firstName": "Mathieu",
        "lastName": "GELBON"
    },
    {
        "firstName": "Léo",
        "lastName": "GENERET"
    },
    {
        "firstName": "Sophia",
        "lastName": "GOUNANI"
    },
    {
        "firstName": "Jason",
        "lastName": "GOUROVITCH"
    },
    {
        "firstName": "José",
        "lastName": "GUIGNERY-TEIXEIRA"
    },
    {
        "firstName": "Clément",
        "lastName": "HALLER"
    },
    {
        "firstName": "Paule",
        "lastName": "HERMAN"
    },
    {
        "firstName": "Godwill",
        "lastName": "HOUNTONDJI"
    },
    {
        "firstName": "Angeline",
        "lastName": "KAPALA"
    },
    {
        "firstName": "Yasin",
        "lastName": "KARACA"
    },
    {
        "firstName": "Pierre-Alexis",
        "lastName": "KRSTIC"
    },
    {
        "firstName": "Nicolas",
        "lastName": "KAYI"
    },
    {
        "firstName": "Salah",
        "lastName": "LAMKADEM"
    },
    {
        "firstName": "Nino",
        "lastName": "LAMOUREUX"
    },
    {
        "firstName": "Théo",
        "lastName": "LARUE"
    },
    {
        "firstName": "Quentin",
        "lastName": "LENGLIN"
    },
    {
        "firstName": "Valentine",
        "lastName": "LEROY"
    },
    {
        "firstName": "Christella",
        "lastName": "LEVIEUX"
    },
    {
        "firstName": "Kevin",
        "lastName": "MANSSAT"
    },
    {
        "firstName": "Vincent",
        "lastName": "MARLOT"
    },
    {
        "firstName": "Fabien",
        "lastName": "MARQUES"
    },
    {
        "firstName": "Nicolas",
        "lastName": "MARTIN"
    },
    {
        "firstName": "Alexandre",
        "lastName": "MARTINS"
    },
    {
        "firstName": "Romain",
        "lastName": "METAYER"
    },
    {
        "firstName": "Amandine",
        "lastName": "MOUETTE"
    },
    {
        "firstName": "Thomas",
        "lastName": "NGUYEN"
    },
    {
        "firstName": "Maxime",
        "lastName": "OGER"
    },
    {
        "firstName": "Marion",
        "lastName": "OTT"
    },
    {
        "firstName": "Billal",
        "lastName": "OUAALI"
    },
    {
        "firstName": "Reda",
        "lastName": "OUAICH"
    },
    {
        "firstName": "Kévin",
        "lastName": "ÖZDEMIR"
    },
    {
        "firstName": "Yash",
        "lastName": "PATEL"
    },
    {
        "firstName": "Ketsia",
        "lastName": "PEDRO"
    },
    {
        "firstName": "Thanh-Son Vincent",
        "lastName": "PHAM"
    },
    {
        "firstName": "Joël",
        "lastName": "POKAM"
    },
    {
        "firstName": "Manon",
        "lastName": "RAGNOTTI"
    },
    {
        "firstName": "Paartheepan",
        "lastName": "RAVEENTHIRAN"
    },
    {
        "firstName": "Ramiya",
        "lastName": "RAVIRAJA"
    },
    {
        "firstName": "Anthony",
        "lastName": "REYNAUD"
    },
    {
        "firstName": "Victor",
        "lastName": "ROCHE"
    },
    {
        "firstName": "Eugénie",
        "lastName": "ROQUES"
    },
    {
        "firstName": "Florian",
        "lastName": "SAHBI"
    },
    {
        "firstName": "Simon",
        "lastName": "SOLEAU"
    },
    {
        "firstName": "Lea",
        "lastName": "SYHANATH"
    },
    {
        "firstName": "Dorian",
        "lastName": "TAING"
    },
    {
        "firstName": "Marie",
        "lastName": "TE"
    },
    {
        "firstName": "Anthony",
        "lastName": "THUILLEZ"
    },
    {
        "firstName": "Hector",
        "lastName": "TRAVAILLÉ"
    },
    {
        "firstName": "Lorick",
        "lastName": "TRAVAILLEUR"
    },
    {
        "firstName": "Pierre",
        "lastName": "TURNBULL"
    },
    {
        "firstName": "Mehdi",
        "lastName": "VERFAILLIE"
    },
    {
        "firstName": "Dimitri",
        "lastName": "VILDINA"
    },
    {
        "firstName": "Marc",
        "lastName": "YE"
    },
    {
        "firstName": "Théodore",
        "lastName": "YIP"
    },
    {
        "firstName": "Keny",
        "lastName": "ZACHELIN"
    },
    {
        "firstName": "Mahel",
        "lastName": "ZEROUAL"
    },
    {
        "firstName": "Enzo",
        "lastName": "ZUNIGA"
    }
]

exports.importData = async (req, res) => {
    // Get students data from json file
    // const students = await JSON.parse(fs.readFileSync(`${__dirname}/data/data-students.json`))

    // Loop over student to generate email and add temporary password 
    students.forEach(student => {
        const {
            firstName,
            lastName
        } = student
        student.email = `${deburr(firstName)}.${deburr(lastName.split(' ').join(''))}@hetic.net`.toLowerCase()
        student.password = 'admin'
    })

    if(req.params.action === 'import') {
        try {
            await User.create(students);
            console.log('Data successfully inserted.');
            process.exit();
        } catch (err) {
            console.log(err);
            process.exit();
        }
    } else if (req.params.action === 'delete') {
        try {
            await User.deleteMany();
            console.log('Data successfully deleted.');
            process.exit();
        } catch (err) {
            console.log(err);
            process.exit();
        }
    }
}

exports.importSkills = async (req, res) => {
    const skills = [
        {
            name: "Programmation côté client"
        },
        {
            name: "Programmation côté serveur"
        },
        {
            name: "Design UI"
        },
        {
            name: "UX"
        },
        {
            name: "Gestion de projet"
        }
    ]
    try {
        await Skill.create(skills);
        console.log('Data successfully inserted.');
        process.exit();
    } catch (err) {
        console.log(err);
        process.exit();
    }
}

exports.updateData = async (req, res) => {
    try {
        let skills = await Skill.find()
        skills = skills.map(skill => {
            return {
                skill_id: skill._id,
                level: undefined
            }
        })
        const skillSet = {
            skills: skills 
        }
        const students = await User.find({ role: { $eq: 'user' } })
        students.forEach(async student => {
            await User.findByIdAndUpdate(student._id, skillSet, {
                new: true,
                runValidators: true,
                useFindAndModify: false
            })
        })
        process.exit();
    } catch (err) {
        console.log(err);
        process.exit();
    }
}
