import axios from "axios";

export async function postSm(name, email, senha, quadra) {
    const response = await axios.post(
      "https://sporting-manager-api.onrender.com/user",
      {
        name: name,
        email: email,
        password: senha,
        local_name: quadra,
      }
    );
    return response;
  }