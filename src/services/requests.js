import { api } from "./api";

// home
export async function sendAllVerifiedEmails(associates) {
  try {
    const payload = {
      id_email: associates.map((associate) =>
        associate.estado == true && associate.envio == false
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

    await api.post(`/send`, payload);
    alert("Todos os emails verificados foram enviados");
  } catch (error) {
    console.error(error);
    alert("Falha ao enviar emails verificados");
  }
}

export async function getAssociates() {
  try {
    const response = await api.get(`/get/emails`);
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
    await api.post(`/create/associate`, payload);
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
export async function validateEmail(id, corpo, corpo2) {
  try {
    const payload = {
      id_email: id,
      corpo: corpo,
      corpo2: corpo2,
    };

    await api.post(`/valida`, payload);
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

    await api.post(`/send/direto`, payload);
    alert("O email foi em enviado!");
  } catch (error) {
    console.error(error);
    alert("Falha ao enviar email");
  }
}

export async function getAssociate(fk) {
  try {
    const response = await api.get(`/get/associate/${fk}`);
    return response.data;
  } catch (error) {
    console.error(error);
    alert("Falha ao carregar dados do associado");
  }
}

export async function getAssociateEmail(name) {
  try {
    const response = await api.get(`/get/email/${name}`);
    return response.data;
  } catch (error) {
    console.error(error);
    alert("Falha ao carregar dados do relatório");
  }
}

// associate list
export async function getAssociateList() {
  try {
    const response = await api.get(`/get/associates`);
    return response.data;
  } catch (error) {
    console.error(error);
    alert("Falha ao listar associados");
  }
}
