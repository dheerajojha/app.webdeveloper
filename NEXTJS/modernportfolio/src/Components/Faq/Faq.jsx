'use client'
import React, { useState } from 'react'
import './Faq.css'
import { FaMinus, FaPlus } from 'react-icons/fa'
const Faq = () => {
  const [toggleFaq, setToggleFaq] = useState(0)
  const faqHandler = (id) => {
    setToggleFaq((prev) => prev === id ? 0 : id)
  }
  const [faq, setFaq] = useState([{
    id: 1,
    question: 'What are the services your offer to your prospective customers?',
    answer: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laudantium totam fugit dolorem ex sapiente optio alias obcaecati harum cum. Nihil eaque earum delectus amet sequi quod, error debitis recusandae.'
  },
  {
    id: 2,
    question: 'who all the services your offer to your prospective customers?',
    answer: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laudantium totam fugit dolorem ex sapiente optio alias obcaecati harum cum. Nihil eaque earum delectus amet sequi quod, error debitis recusandae.'
  },
  {
    id: 3,
    question: 'we are the services your offer to your prospective customers?',
    answer: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laudantium totam fugit dolorem ex sapiente optio alias obcaecati harum cum. Nihil eaque earum delectus amet sequi quod, error debitis recusandae.'
  },
  {
    id: 4,
    question: 'When are the services your offer to your prospective customers?',
    answer: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laudantium totam fugit dolorem ex sapiente optio alias obcaecati harum cum. Nihil eaque earum delectus amet sequi quod, error debitis recusandae.'
  },
  {
    id: 5,
    question: 'how are the services your offer to your prospective customers?',
    answer: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laudantium totam fugit dolorem ex sapiente optio alias obcaecati harum cum. Nihil eaque earum delectus amet sequi quod, error debitis recusandae.'
  },
  ])
  return (
    <section className="faq-wrapper">
      <div className="heading">
        <span>-FAQS</span>
        <h2>Question? <span>Look here</span></h2>
      </div>

      <div className="faq-container">
        {faq.map((item) => (
          <div className="faq" key={item.id}>
            <div className="faq-body flex-between">
              <p>{item.question}</p>
              <span onClick={() => faqHandler(item.id)}>
                {item.id === toggleFaq ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {item.id === toggleFaq && <div className="faq-footer">
              <p>{item.answer}</p>
            </div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq