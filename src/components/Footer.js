import React from 'react'
export const Footer = () => {
  return (
    <div className="bg-dark py-5 text-light text-center mt-5">
        &copy; Copyright all reserved {
        new Date().getFullYear()    
        } || made with ❤️‍🔥 by <a href="karkibishal.com">Bishal Karki</a>
    </div>
  )
}
