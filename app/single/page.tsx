import React from 'react'
import BreadCrumb from '../components/single/BreadCrumb'
import Image from 'next/image'
import { BiLink, BiLogoFacebook, BiLogoTelegram, BiLogoTwitter, BiLogoWhatsapp } from 'react-icons/bi'
import CommentSection from '../components/single/CommentSection'
import CardNewsGrouped from '../components/CardNewsGrouped'
import MainLayout from '../components/commons/MainLayout'

function Single() {
  return (
    <MainLayout>
      <main className="container mt-4 container-main">
        <div className="row">
          <div className="col-md-8">

            <BreadCrumb />

            <article className="blog-post">
              <h2 className="blog-post-title mb-1">Mens Ashes: England close on 114-4, needing 257 more to win</h2>

              <div className="meta-social mb-3">
                <p className="blog-post-meta mb-0">January 1, 2021 by <a href="#">Mark</a> </p>
                <div className='share-social'>
                  <span className=''>share :</span>
                  <button type='button' className='btn btn-social ms-2 rounded-circle tw'><BiLogoTwitter /></button>
                  <button type='button' className='btn btn-social ms-2 rounded-circle fb'><BiLogoFacebook /></button>
                  <button type='button' className='btn btn-social ms-2 rounded-circle wa'><BiLogoWhatsapp /></button>
                  <button type='button' className='btn btn-social ms-2 rounded-circle tele'><BiLogoTelegram /></button>
                  <button type='button' className='btn btn-social ms-2 rounded-circle share-link'><BiLink /></button>
                </div>
              </div>

              

              <Image src='https://images.pexels.com/photos/3957616/pexels-photo-3957616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={300} height={200} alt='' />
              

              <p className='text-muted mt-2 fs-6'>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.</p>
              
              <h2>Blockquotes</h2>
              <p>This is an example blockquote in action:</p>
              <blockquote className="blockquote">
                <p>Quoted text goes here.</p>
              </blockquote>
              <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <h3>Example lists</h3>
              <p>This is some additional paragraph placeholder content. It s a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
              <ul>
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
              </ul>
              <p>And this is an ordered list:</p>

              <ol>
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
              </ol>

              <p>And this is a definition list:</p>
              <dl>
                <dt>HyperText Markup Language (HTML)</dt>
                <dd>The language used to describe and define the content of a Web page</dd>
                <dt>Cascading Style Sheets (CSS)</dt>
                <dd>Used to describe the appearance of Web content</dd>
                <dt>JavaScript (JS)</dt>
                <dd>The programming language used to build advanced Web sites and applications</dd>
              </dl>
              <h2>Inline HTML elements</h2>
              <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
            
              <ul>
                <li><strong>To bold text</strong>, use <code className="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
                <li><em>To italicize text</em>, use <code className="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>
                <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code className="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code className="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
                <li>Citations, like <cite>— Mark Otto</cite>, should use <code className="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
                <li><del>Deleted</del> text should use <code className="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code className="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
                <li>Superscript <sup>text</sup> uses <code className="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code className="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.</li>
              </ul>

              <p>Most of these elements are styled by browsers with few modifications on our part.</p>
              <h2>Heading</h2>
              <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <h3>Sub-heading</h3>
              <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <pre><code>Example code block</code></pre>
              <p>This is some additional paragraph placeholder content. Its a slightly shorter version of the other highly repetitive body text used throughout.</p>
            </article>


            <div className="mb-3 sp-recomendation-post">

                <div className="d-inline-flex w-100 justify-content-between mb-3">
                  <h5 className="">Recomendations</h5>
                  <a href="#">SEE MORE</a>
                </div>

                <div className="row">

                  <div className="col-md-4 col-6">
                    <CardNewsGrouped 
                      title="More than 1300 arrested on fourth night of riots in France"
                      imgUrl="https://images.pexels.com/photos/3957616/pexels-photo-3957616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      category="Economy"
                    />
                  </div>

                  <div className="col-md-4 col-6">
                    <CardNewsGrouped 
                      title="More than 1300 arrested on fourth night of riots in France of riots in France of riots in France"
                      imgUrl="https://images.pexels.com/photos/1394506/pexels-photo-1394506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      category="Politics"
                    />
                  </div>

                  <div className="col-md-4 col-6">
                    <CardNewsGrouped 
                      title="More than 1300 arrested on fourth night of riots in France"
                      imgUrl="https://images.pexels.com/photos/1394506/pexels-photo-1394506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      category="Sport"
                    />
                  </div>

                  <div className="col-md-4 col-6">
                    <CardNewsGrouped 
                      title="More than 1300 arrested on fourth night of riots in France"
                      imgUrl="https://images.pexels.com/photos/3957616/pexels-photo-3957616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      category="Economy"
                    />
                  </div>

                  <div className="col-md-4 col-6">
                    <CardNewsGrouped 
                      title="More than 1300 arrested on fourth night of riots in France"
                      imgUrl="https://images.pexels.com/photos/1394506/pexels-photo-1394506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      category="Politics"
                    />
                  </div>

                  <div className="col-md-4 col-6">
                    <CardNewsGrouped 
                      title="More than 1300 arrested on fourth night of riots in France"
                      imgUrl="https://images.pexels.com/photos/1394506/pexels-photo-1394506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      category="Sport"
                    />
                  </div>

                </div>

            </div>

            <div className="mb-3 sp-related-post">

                <div className="d-inline-flex w-100 justify-content-between mb-3">
                  <h5 className="">Related News</h5>
                  <a href="#">SEE MORE</a>
                </div>

                <div className="row">

                  <div className="col-6 mb-3">
                    <a href="#" className='d-block w-100 h-100 border-bottom pb-2'>More than 1300 arrested on</a>
                  </div>                
                  
                  <div className="col-6 mb-3">
                    <a href="#" className='d-block w-100 h-100 border-bottom pb-2'>More than 1300 arrested on fourth night of riots in France</a>
                  </div>       

                  <div className="col-6 mb-3">
                    <a href="#" className='d-block w-100 h-100 border-bottom pb-2'>More than 1300 arrested on fourth night of riots in France</a>
                  </div>

                  <div className="col-6 mb-3">
                    <a href="#" className='d-block w-100 h-100 border-bottom pb-2'>More than 1300 arrested on fourth</a>
                  </div>

                  <div className="col-6 mb-3">
                    <a href="#" className='d-block w-100 h-100 border-bottom pb-2'>More than 1300 arrested on fourth night of riots in France</a>
                  </div>       

                  <div className="col-6 mb-3">
                    <a href="#" className='d-block w-100 h-100 border-bottom pb-2'>More than 1300 arrested on fourth night of riots in France</a>
                  </div>               
                          

                </div>

            </div>

            <div className="sp-comment-section">
              <CommentSection />
            </div>

          </div>
          <div className="col-md-3 offset-md-1">
            <div className="add-item-vertical">
              <span className="fs-6 d-block ms-auto mb-2 me-4">ADVERTISEMENT</span>
              <Image src="https://images.pexels.com/photos/15439326/pexels-photo-15439326/free-photo-of-malam-hotel-neon-papan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={380} height={600} alt="" />
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default Single