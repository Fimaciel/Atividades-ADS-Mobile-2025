import { StyleSheet } from 'react-native';

// Paleta Roxo & Preto
const COLORS = {
  // Roxo (principal)
  primary: '#6A0DAD',        // Roxo escuro
  primaryDark: '#4B0082',    // Roxo profundo (indigo)
  primaryLight: '#9B30FF',   // Roxo mais claro
  
  // Preto (secundário)
  secondary: '#000000',
  secondaryDark: '#1A1A1A',
  secondaryLight: '#333333',
  
  // Cores neutras
  white: '#FFFFFF',
  lightGray: '#F5F5F5',
  gray: '#AAAAAA',
  darkGray: '#555555',
  black: '#000000',
  
  // Cores de status
  error: '#E53E3E',
  success: '#38A169',
  warning: '#DD6B20',
};

export const globalStyles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: COLORS.black, // fundo preto
  },
  
  // Container com scroll
  scrollView: {
    flex: 1,
  },
  
  scrollContent: {
    padding: 20,
    paddingTop: 50,
  },
  
  // Títulos
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: COLORS.primaryLight, // destaque em roxo claro
  },
  
  // Inputs
  inputContainer: {
    marginBottom: 15,
  },
  
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: COLORS.secondaryDark, // fundo cinza escuro
    color: COLORS.white, // texto branco dentro do input
  },
  
  inputError: {
    borderColor: COLORS.error,
  },
  
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  
  // Botões
  button: {
    backgroundColor: COLORS.primary, // botão roxo
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  
  buttonSecondary: {
    backgroundColor: COLORS.secondaryLight, // botão preto/cinza
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  // Texto de erro
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
});

export { COLORS };
