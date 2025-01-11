import Link from "next/link"

const page = () => {
    return (
        <main className="policyMainContainer">
            <h1>Terms and Conditions</h1>
            <div className="policyContainer">
                <div className="policy">
                    <h3>1. Introduction</h3>
                    <p>Welcome to Param CAD Center (“Website”), owned and operated by Param CAD Center. These Terms and Conditions (“Terms”) govern your access to and use of our website and services, including the purchase and use of online courses. You agree to comply with these Terms by accessing or using the Website. If you do not agree with these Terms, please refrain from using our services.</p>
                </div>

                <div className="policy">
                    <h3>2. User Agreement</h3>
                    <div className="policy">
                        <h4>If You’re 18 or Older:</h4>
                        <p>You can use the platform freely without needing anyone's permission.</p>
                    </div>
                    <div className="policy">
                        <h4>If You’re Between 13 and 18:</h4>
                        <p>You can use the platform only if you have permission from your parent or legal guardian. By using the platform, you are promising that you have gotten this permission.</p>
                    </div>
                    <div className="policy">
                        <h4>If You’re Under 13 (or Under 16 in Some Countries):</h4>
                        <p>You are not allowed to use the platform or sign up for any services it offers. This is due to strict laws like the Children's Online Privacy Protection Act (COPPA) in the U.S. or the General Data Protection Regulation (GDPR) in Europe, which restrict data collection from young users.</p>
                    </div>
                    <p>You will comply with these Terms and applicable laws while using our services.</p>
                    <p>You will not use the Website for any unlawful or prohibited activities.</p>
                </div>

                <div className="policy">
                    <h3>3. Account Registration</h3>
                    <p>To access certain features, you may be required to create an account. When registering, you agree to:</p>
                    <ul style={{ marginLeft: "2rem" }}>
                        <li>Provide accurate and up-to-date information.</li>
                        <li>Maintain the confidentiality of your account credentials.</li>
                        <li>Be responsible for all activities under your account.</li>
                    </ul>
                    <p>We reserve the right to suspend or terminate your account if false information is provided or if these Terms are violated.</p>
                </div>

                <div className="policy">
                    <h3>4. Course Purchases and Payments</h3>
                    <div className="policy" style={{ marginLeft: "1rem" }}>
                        <div className="policy">
                            <h3>4.1 Pricing and Payments</h3>
                            <p>All prices for courses are displayed in INR. Payments must be made in full at the time of purchase through the available payment methods. Prices are subject to change without prior notice.</p>
                        </div>
                        <div className="policy">
                            <h3>4.2 Refund Policy</h3>
                            <p>Thank you for using Param CAD Center. We want you to be satisfied with your purchase, but if you are not, we offer a <Link href={"/refund-policy"} className="actionLink">refund policy</Link></p>
                        </div>
                    </div>
                </div>

                <div className="policy">
                    <h3>5. Intellectual Property Rights</h3>
                    <p>All content on this Website, including but not limited to course materials, videos, images, and text (“Content”), is owned by Param CAD Center or its licensors. You are prohibited from:</p>
                    <ul style={{ marginLeft: "2rem" }}>
                        <li>Copying, reproducing, or redistributing Content without permission.</li>
                        <li>Removing or altering any copyright or proprietary notices.</li>
                    </ul>
                    <p>Unauthorized use of Content may result in legal action.</p>
                </div>

                <div className="policy">
                    <h3>6. License for Personal Use</h3>
                    <p>Upon purchase, you are granted a limited, non-exclusive, non-transferable license to access and use the course materials for personal educational purposes only. You may not:</p>
                    <ul style={{ marginLeft: "2rem" }}>
                        <li>Share your account credentials with others.</li>
                        <li>Sell, sublicense, or distribute the course materials.</li>
                    </ul>
                </div>

                <div className="policy">
                    <h3>7. Prohibited Activities</h3>
                    <p>When using the Website, you agree not to:</p>
                    <ul style={{ marginLeft: "2rem" }}>
                        <li>Share or distribute purchased content publicly.</li>
                        <li>Attempt to hack, disrupt, or damage the Website or services.</li>
                        <li>Upload or transmit harmful or illegal materials.</li>
                    </ul>
                </div>

                <div className="policy">
                    <h3>8. User-Generated Content</h3>
                    <p>Users may post reviews, comments, or feedback on the Website. By submitting such content, you:</p>
                    <ul style={{ marginLeft: "2rem" }}>
                        <li>Grant Param CAD Center a non-exclusive license to use, display, and distribute your content.</li>
                        <li>Ensure that your content is lawful and does not infringe on the rights of others.</li>
                    </ul>
                    <p>We reserve the right to remove user-generated content that violates these Terms or applicable laws.</p>
                </div>

                <div className="policy">
                    <h3>10. Privacy Policy</h3>
                    <p>Your use of the Website is also governed by our <Link href={"/privacy-policy"} className="actionLink">privacy policy</Link>. This policy explains how we collect, use, and protect your personal information.</p>
                </div>

                <div className="policy">
                    <h3>11. Termination</h3>
                    <p>We reserve the right to terminate or suspend your account and access to services at our sole discretion if:</p>
                    <ul style={{ marginLeft: "2rem" }}>
                        <li>You violate these Terms.</li>
                        <li>Fraudulent activity or misuse of our services is detected.</li>
                    </ul>
                </div>

                <div className="policy">
                    <h3>12. Governing Law and Jurisdiction</h3>
                    <p>Any claim relating to the Platform shall be governed by the laws of the Creator’s home jurisdiction (as provided on the Platform) without regard to its conflict of law provisions. You agree, as we do, to submit to the exclusive jurisdiction of the courts at Creator’s home jurisdiction.</p>
                </div>

                <div className="policy">
                    <h3>13. Changes to Terms</h3>
                    <p>We reserve the right to update or modify these Terms at any time. Changes will be effective immediately upon posting on the Website. Your continued use of the Website indicates acceptance of the updated Terms.</p>
                </div>

                <div className="policy">
                    <h3>14. Contact Information</h3>
                    <p>If you have any questions or concerns about these Terms, please contact us at:</p>
                    <p><b>Email:</b> param.cc@gmail.com</p>
                    <p><b>Phone:</b> +91 9624000098</p>
                    <p><b>Address: </b> Bholenath Arcade, Nr. Ford Service Center, New 80 Feet Road Opp Nagbai Pan Kuvadva Road, Rajkot-3.</p>
                </div>
            </div>
        </main>
    )
}

export default page