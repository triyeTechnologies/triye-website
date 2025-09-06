// Form validation utilities

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  // Allow various phone formats
  const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateName = (name) => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

export const validateMessage = (message) => {
  return message.trim().length >= 10 && message.trim().length <= 1000;
};

export const validateForm = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name || !formData.name.trim()) {
    errors.name = 'Name is required';
  } else if (!validateName(formData.name)) {
    errors.name = 'Name must be between 2 and 50 characters';
  }

  // Email validation
  if (!formData.email || !formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation (optional but if provided, must be valid)
  if (formData.phone && formData.phone.trim() && !validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Message validation
  if (!formData.message || !formData.message.trim()) {
    errors.message = 'Message is required';
  } else if (!validateMessage(formData.message)) {
    errors.message = 'Message must be between 10 and 1000 characters';
  }

  // Company validation (optional, but if provided, check length)
  if (formData.company && formData.company.trim().length > 100) {
    errors.company = 'Company name is too long';
  }

  return errors;
};

// Sanitize input data
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000); // Limit length
};

// Format phone number for display
export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  
  return phone;
};

// Check if form has changes
export const hasFormChanged = (formData, initialData) => {
  return Object.keys(formData).some(key => 
    formData[key] !== initialData[key]
  );
};

// Clear form data
export const clearFormData = () => ({
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
  interest: 'general'
});

export default {
  validateEmail,
  validatePhone,
  validateName,
  validateMessage,
  validateForm,
  sanitizeInput,
  formatPhoneNumber,
  hasFormChanged,
  clearFormData
};
