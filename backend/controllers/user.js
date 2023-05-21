import { User} from '../models/user.js';

export const addUser = async (req, res) => {  
    const name = req.body.name;
    const email = req.body.email;
    const type = req.body.type;
  
    let newUser = new User({
      name,
      email,
      type,
    });
  
    newUser = await newUser
      .save()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  export const findUserByEmail = async (req, res) => {
    const email = req.params.email;
    User.findOne({ email: email })
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };