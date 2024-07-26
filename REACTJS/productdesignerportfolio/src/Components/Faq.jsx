import React, { useState } from 'react'
import styled from 'styled-components'
import { FaMinus, FaPlus } from "react-icons/fa"
const Faq = () => {
    const [faqId, setFaqId] = useState(0)
    const faqHandler = (id) => {
        setFaqId((prevId) => (prevId === id ? 0 : id));
    };

    const [faq, setFaq] = useState([{
        id: 1,
        question: 'What are the services Your End Up Providing?',
        answer: '            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae similique quidem distinctio quos voluptatibus! Vero voluptas laborum fuga, id in amet tenetur, ut inventore labore unde veniam sit? Dicta?',
    },
    {
        id: 2,
        question: 'Why are the services Your End Up Providing?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae similique quidem distinctio quos voluptatibus! Vero voluptas laborum fuga, id in amet tenetur, ut inventore labore unde veniam sit? Dicta?',
    },
    {
        id: 3,
        question: 'How are the services Your End Up Providing?',
        answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae similique quidem distinctio quos voluptatibus! Vero voluptas laborum fuga, id in amet tenetur, ut inventore labore unde veniam sit? Dicta?',
    },
    {
        id: 4,
        question: 'How are the services Your End Up Providing?',
        answer: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae similique quidem distinctio quos voluptatibus! Vero voluptas laborum fuga, id in amet tenetur, ut inventore labore unde veniam sit? Dicta?',
    }
    ],

    )

    return (
        <FaqWrapper>
            <div className="heading">
                <span>FAQS</span>
                <h2>Frequestly Asked Question</h2>
            </div>

            <div className="faq-container">
                {faq.map((item) => (
                    <div className="faq" key={item.id}>
                        <div className="faq-body flex-between">
                            <h3>{item.question}</h3>
                            <span onClick={() => faqHandler(item.id)}>
                                {faqId === item.id ? <FaMinus /> : <FaPlus />}
                            </span>
                        </div>
                        {faqId === item.id && (
                            <div className="faq-footer">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </FaqWrapper>
    )
}

const FaqWrapper = styled.section`
.faq-container{
.faq{
    margin-bottom:1rem;
    .faq-body{
        padding:1rem;
        background-color:var(--primary);
        span{
            cursor:pointer;
            border:1px solid var(--white);
            padding:.8rem;
            display:flex;
        }
    }
    .faq-footer{
        background-color:var(--secondry);
        color:var(--white);
        padding:1rem;
        transition:.5s ease;      
    }
}
}


`

export default Faq