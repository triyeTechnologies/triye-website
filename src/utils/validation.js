const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email) => {
  if (!email || email.trim() === '') {
    return { isValid: false, error: 'Email is required' };
  }
  
  if (!EMAIL_REGEX.test(email.trim())) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  return { isValid: true, error: '' };
};

export const validateName = (name) => {
  if (!name || name.trim() === '') {
    return { isValid: false, error: 'Name is required' };
  }
  
  if (name.trim().length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters long' };
  }
  
  if (name.trim().length > 100) {
    return { isValid: false, error: 'Name must be less than 100 characters' };
  }
  
  return { isValid: true, error: '' };
};

export const validateSubject = (subject) => {
  if (!subject || subject.trim() === '') {
    return { isValid: false, error: 'Subject is required' };
  }
  
  if (subject.trim().length < 5) {
    return { isValid: false, error: 'Subject must be at least 5 characters long' };
  }
  
  if (subject.trim().length > 200) {
    return { isValid: false, error: 'Subject must be less than 200 characters' };
  }
  
  return { isValid: true, error: '' };
};

export const validateMessage = (message) => {
  if (!message || message.trim() === '') {
    return { isValid: false, error: 'Message is required' };
  }
  
  if (message.trim().length < 10) {
    return { isValid: false, error: 'Message must be at least 10 characters long' };
  }
  
  if (message.trim().length > 2000) {
    return { isValid: false, error: 'Message must be less than 2000 characters' };
  }
  
  return { isValid: true, error: '' };
};

export const validateContactForm = (formData) => {
  const errors = {};
  let isValid = true;
  
  const nameValidation = validateName(formData.name);
  if (!nameValidation.isValid) {
    errors.name = nameValidation.error;
    isValid = false;
  }
  
  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error;
    isValid = false;
  }
  
  const subjectValidation = validateSubject(formData.subject);
  if (!subjectValidation.isValid) {
    errors.subject = subjectValidation.error;
    isValid = false;
  }
  
  const messageValidation = validateMessage(formData.message);
  if (!messageValidation.isValid) {
    errors.message = messageValidation.error;
    isValid = false;
  }
  
  return { isValid, errors };
};

export const sanitizeInput = (text) => {
  if (!text) return '';
  
  return text
    .replace(/[<>]/g, '')
    .trim();
};

export const formatFormData = (formData) => {
  return {
    name: sanitizeInput(formData.name),
    email: sanitizeInput(formData.email),
    subject: sanitizeInput(formData.subject),
    message: sanitizeInput(formData.message),
  };
};