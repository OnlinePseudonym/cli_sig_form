<template>
    <div class="column is-one-third">
        <section class="section">
            <h1 class="title">Signature Generator</h1>
            <p class="subtitle">Enter your information below, click the copy button under the preview window, and paste it into the the signature box of your desired email client.</p>
            <section class="form">
                <slot></slot>
            </section>
        </section>
    </div>
</template>

<style scoped>
    .title, .subtitle {
        font-weight: 300;
    }
    @media only screen and (min-width:769px) {
        .is-one-third {
            width: 45%;
        }
    }
    @media only screen and (min-width:850px) {
        .is-one-third {
            width: 50%;
        }
    }
</style>