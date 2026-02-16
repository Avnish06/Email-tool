import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
       <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          
          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Hatbaliya Technology
            </h4>
            <p className="text-sm text-gray-400">
              Empowering businesses with modern email marketing solutions that
              drive growth and engagement.
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Product</h5>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Campaigns</li>
              <li className="hover:text-white cursor-pointer">Automation</li>
              <li onClick={() => navigate("/campaign/templates")} className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Analytics</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Support</h5>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
          © {new Date().getFullYear()} Hatbaliya Technology. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
