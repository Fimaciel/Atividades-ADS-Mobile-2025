import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [nomeError, setNomeError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // valida nome
  const validateForm = () => {
    let isValid = true;

    if (!nome.trim()) {
      setNomeError("Nome é obrigatório");
      isValid = false;
    } else {
      setNomeError("");
    }

    if (!validateEmail(email)) {
      setEmailError("Email inválido");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  // valida email com regex simples
  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const dados = { nome, email };
      console.log("Dados do formulário válidos:", dados);

      Alert.alert("Sucesso!!!", "Formulário enviado com sucesso");

      // resetar formulário
      setNome("");
      setEmail("");
    } else {
      Alert.alert("Erro", "Por favor, corrija os erros antes de enviar.");
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.scrollContent}>
        <Text style={globalStyles.title}>FORMULÁRIO</Text>

        {/* Campo Nome */}
        <View style={globalStyles.inputContainer}>
          <TextInput
            style={[globalStyles.input, nomeError && globalStyles.inputError]}
            placeholder="Nome completo"
            value={nome}
            onChangeText={setNome}
          />
          {nomeError ? (
            <Text style={globalStyles.errorText}>{nomeError}</Text>
          ) : null}
        </View>

        {/* Campo Email */}
        <View style={globalStyles.inputContainer}>
          <TextInput
            style={[globalStyles.input, emailError && globalStyles.inputError]}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {emailError ? (
            <Text style={globalStyles.errorText}>{emailError}</Text>
          ) : null}
        </View>

        <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
          <Text style={globalStyles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
