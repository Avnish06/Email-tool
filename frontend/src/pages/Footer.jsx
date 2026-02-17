import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
       <footer className="bg-card text-muted-foreground border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          
          {/* Company */}
          <div>
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Hatbaliya Technology
            </h4>
            <p className="text-sm text-muted-foreground">
              Empowering businesses with modern email marketing solutions that
              drive growth and engagement.
            </p>
          </div>

          {/* Links */}
          <div>
            <h5 className="text-lg font-semibold text-foreground mb-4">Product</h5>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary cursor-pointer transition-colors text-muted-foreground">Campaigns</li>
              <li className="hover:text-primary cursor-pointer transition-colors text-muted-foreground">Automation</li>
              <li onClick={() => navigate("/campaign/templates")} className="hover:text-primary cursor-pointer transition-colors text-muted-foreground">Templates</li>
              <li className="hover:text-primary cursor-pointer transition-colors text-muted-foreground">Analytics</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-lg font-semibold text-foreground mb-4">Support</h5>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary cursor-pointer transition-colors text-muted-foreground">Help Center</li>
              <li className="hover:text-primary cursor-pointer transition-colors text-muted-foreground">Contact Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors text-muted-foreground">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer transition-colors text-muted-foreground">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border text-center py-6 text-sm text-muted-foreground bg-accent/5">
          © {new Date().getFullYear()} Hatbaliya Technology. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
