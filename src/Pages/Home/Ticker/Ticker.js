import React from 'react';
import './Ticker.css'

const Ticker = () => {
    return (
        <div>

            <section>
                <div >
                    <h5 style={{ color: "red", margin: "20px", padding: "20px", fontSize: "40px" }}>Announcement!!!</h5>
                </div>
                <div class="marquee">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus laboriosam placeat ipsam nostrum nihil aut officia dicta ex, at corrupti et modi ullam dolore qui quae eos nisi, obcaecati est quos, officiis nemo totam? Corporis, ipsa, placeat, quo fuga mollitia iste illum deserunt architecto cumque perferendis aliquam. Hic, ducimus distinctio?</p>
                </div>
            </section>

        </div>
    );
};

export default Ticker;