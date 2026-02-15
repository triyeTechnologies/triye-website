import React, { useState, useEffect } from 'react';
import {
  Lock,
  Eye,
  EyeOff,
  Mail,
  Phone,
  User,
  Calendar,
  MessageSquare,
  Trash2,
  LogOut,
  Shield,
  AlertTriangle,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { auth, database } from '../lib/supabase';

const AdminPage = () => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  useEffect(() => {
    checkAuthStatus();

    // Listen for auth state changes
    const { data: { subscription } } = auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
      if (session) {
        loadMessages();
      } else {
        setMessages([]);
        setSelectedMessage(null);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const session = await auth.getSession();
      setIsAuthenticated(!!session);
      if (session) {
        await loadMessages();
      }
    } catch (error) {
      console.error('Auth check error:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMessages = async () => {
    try {
      const data = await database.getMessages();
      setMessages(data);
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');

    try {
      await auth.signIn(loginData.email, loginData.password);
      // Auth state change will handle the rest
    } catch (error) {
      console.error('Login error:', error);
      setLoginError(error.message || 'Invalid email or password');
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setLoginData({ email: '', password: '' });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleDeleteClick = (messageId) => {
    setDeleteConfirmation(messageId);
  };

  const confirmDelete = async () => {
    if (!deleteConfirmation) return;

    try {
      await database.deleteMessage(deleteConfirmation);
      setMessages(messages.filter(msg => msg.id !== deleteConfirmation));

      if (selectedMessage?.id === deleteConfirmation) {
        setSelectedMessage(null);
      }

      setDeleteConfirmation(null);
    } catch (error) {
      console.error('Error deleting message:', error);
      alert('Failed to delete message. Please try again.');
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Access</h2>
            <p className="text-gray-600">Sign in to view messages</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="admin@triye.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {loginError && (
                <p className="text-red-600 text-sm mt-2">{loginError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Lock className="w-5 h-5" />
              <span>Sign In</span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              ← Back to Website
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Triye Admin</h1>
                <p className="text-sm text-gray-600">Message Management Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-700 font-medium"
              >
                View Website
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors duration-200"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">
                  Contact Messages ({messages.length})
                </h2>
              </div>
              <div className="max-h-[600px] overflow-y-auto">
                {messages.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    <Mail className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>No messages yet</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-200">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        onClick={() => setSelectedMessage(message)}
                        className={`p-4 cursor-pointer transition-colors duration-200 ${selectedMessage?.id === message.id
                          ? 'bg-blue-50 border-r-4 border-blue-500'
                          : 'hover:bg-gray-50'
                          }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 truncate pr-2">
                            {message.name}
                          </h3>
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            {formatDate(message.created_at)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 truncate mb-1">
                          {message.subject}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Mail className="w-3 h-3 mr-1" />
                            {message.email}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {selectedMessage ? (
              <div className="bg-white rounded-xl shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedMessage.subject}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {selectedMessage.name}
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          {selectedMessage.email}
                        </div>
                        {selectedMessage.phone && (
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            {selectedMessage.phone}
                          </div>
                        )}
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDate(selectedMessage.created_at)}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteClick(selectedMessage.id)}
                      className="flex items-center space-x-2 bg-red-100 text-red-700 px-3 py-2 rounded-lg hover:bg-red-200 transition-colors duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message
                    </label>
                    <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
                      <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">
                        {selectedMessage.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <Mail className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Select a Message
                </h3>
                <p className="text-gray-600">
                  Choose a message from the list to view its details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Delete Confirmation Modal */}
      {deleteConfirmation && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setDeleteConfirmation(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mx-auto mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Delete Message?</h3>
            <p className="text-gray-600 text-center mb-6">
              Are you sure you want to delete this message? This action cannot be undone.
            </p>

            <div className="flex space-x-3">
              <button
                onClick={() => setDeleteConfirmation(null)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;