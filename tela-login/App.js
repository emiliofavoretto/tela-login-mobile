import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ScrollView,Platform,KeyboardAvoidingView } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
          <View style={styles.logoContainer}>
            <View style={styles.logoBox}>
              <MaterialIcons name="school" size={40} color="#6d1092" style={styles.boina} />
            </View>
          </View>

          <Text style={styles.title}>Bem-vindo de volta</Text>
          <Text style={styles.subtitle}>Acesse sua conta do SENAI</Text>

          <View style={styles.inputLabelContainer}>
            <Text style={styles.label}>E-mail</Text>
            <View style={styles.inputContainer}>
              <MaterialIcons name="mail-outline" size={20} color="#999" style={styles.inputIcon} />
              <TextInput 
                style={styles.input}
                placeholder="seu@email.com"
                placeholderTextColor="#ccc"
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.inputLabelContainer}>
            <Text style={styles.label}>Senha</Text>
            <View style={styles.inputContainer}>
              <MaterialIcons name="lock-outline" size={20} color="#999" style={styles.inputIcon} />
              <TextInput 
                style={styles.input}
                placeholder="********"
                placeholderTextColor="#ccc"
                secureTextEntry={true}
              />
              <TouchableOpacity>
                <MaterialIcons name="visibility-off" size={20} color="#999" />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
            <MaterialIcons name="arrow-forward" size={24} color="#FFF" />
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Ou entre com</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome5 name="apple" size={24} color="#333" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome5 name="google" size={20} color="#DB4437" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome5 name="microsoft" size={20} color="#00A4EF" />
            </TouchableOpacity>
          </View>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Não tem uma conta? </Text>
            <TouchableOpacity>
              <Text style={styles.signupText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContainer: {
    padding: 24,
    flexGrow: 1,
    justifyContent: 'center',
  },

  boina: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  },
  
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoBox: {
    width: 80,
    height: 80,
    backgroundColor: '#FFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#7F22FD",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },

  inputLabelContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    paddingHorizontal: 16,
    height: 56,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Arial'
  },

  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#7F22FD',
    fontWeight: '600',
    fontSize: 14,
  },

  button: {
    backgroundColor: '#7F22FD',
    flexDirection: 'row',
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: "#7F22FD",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#666',
    fontSize: 14,
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 22,
    marginBottom: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#EFEFEF',
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
  signupText: {
    color: '#7F22FD',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
