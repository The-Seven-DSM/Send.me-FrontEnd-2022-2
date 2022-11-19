import { api } from "./api";

// home
export async function sendAllVerifiedEmails(associates) {
  try {
    const payload = {
      id_email: associates.map((associate) =>
        associate.estado === true && associate.envio === false
          ? associate.id_email
          : null
      ),
      nome: associates.map((associate) =>
        associate.estado && !associate.envio ? associate.associado.nome : null
      ),
      corpo: associates.map((associate) =>
        associate.estado && !associate.envio ? associate.corpo : null
      ),
      email: associates.map((associate) =>
        associate.estado && !associate.envio ? associate.associado.email : null
      ),
    };

    await api.post(`/sendEmails`, payload);
    alert("Todos os emails verificados foram enviados");
  } catch (error) {
    console.error(error);
    alert("Falha ao enviar emails verificados");
  }
}

export async function getEmails() {
  try {
    const response = await api.get(`/emails`);
    return response.data;
  } catch (error) {
    console.error(error);
    alert("Falha ao listar associados");
  }
}

// create associate
export async function createAssociate(associateData) {
  try {
    const payload = {
      nome: associateData.nome,
      email: associateData.email,
      genero: associateData.genero,
      cpf: associateData.cpf,
      rg: associateData.rg,
      datanascimento: associateData.datanascimento,
    };
    await api.post(`/associate`, payload);  
    alert("Associado cadastrado com sucesso!");
  } catch (error) {
    console.error(error);
    alert("Falha ao cadastrar associado");
  }
}

// login
export async function login(values) {
  try {
    const payload = {
      email: values.email,
      senha: values.senha,
    };

    await api.post(`/auth`, payload);
    window.location.href = "/home";
  } catch (error) {
    console.error(error);
    alert("Email ou senha incorretos");
  }
}

// editor
export async function validateEmail(id_Email, texto, values) {
  try {
    const payload = {
      Email_id: id_Email,
      texto: texto,
      values: values,
    };

    await api.post(`/validateEmail`, payload);
    alert("O email foi validado!");
  } catch (error) {
    console.error(error);
    alert("Falha ao validar email");
  }
}

export async function sendEmail(id, corpo, corpo2, fk, nome, email) {
  try {
    const payload = {
      id_email: id,
      corpo: corpo,
      corpo2: corpo2,
      fk_id_associado: fk,
      nome,
      email,
    };

    await api.post(`/sendEmail`, payload);
    alert("O email foi em enviado!");
  } catch (error) {
    console.error(error);
    alert("Falha ao enviar email");
  }
}

export async function getAssociate(fk) {
  try {
    
    const response = await api.get(`/associate/${fk}`);
    return response.data;
  } catch (error) {
    console.error(error);
    alert("Falha ao carregar dados do associado");
  }
}

export async function getAssociateEmail(id_Email) {
  try {
    const response = await api.get(`/emailsByAssociateID/${id_Email}`);
    // console.log(response.data[0].emails[0].pagina);
    let corpo = response.data[0].corpo
    let pagina = response.data[0].pagina
    let id_email = response.data[0].id_email
    console.log(corpo, pagina, id_email);
    return {corpo, pagina, id_email};
  } catch (error) {
    console.error(error);
    alert("Falha ao carregar dados do relatório");
  }
}

// associate list
export async function getAssociateList() {
  try {
    const response = await api.get(`/associates`);
    return response.data;
  } catch (error) {
    console.error(error);
    alert("Falha ao listar associados");
  }
}

// profile
export async function getAssociateEmails(fk) {
  try {
    const response = await api.get(`/emailsByAssociateID/${fk}`);
    return response.data;
  } catch (error) {
    console.error(error);
    alert("Falha ao carregar dados do associado");
  }
}

export async function deleteAssociate(id) {
  try {
    await api.delete(`/associate/${id}`);
    alert("Associado foi deletado!");
  } catch (error) {
    console.error(error);
    alert("Falha ao deletar associado");
  }
}
