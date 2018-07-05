<template>
    <div class="column">
        <section id="preview" class="section">
            <h2 class="title is-4">Preview</h2>
            <div id="signature-table" class="box">
                <table border="0" cellspacing="0" cellpadding="0" width="350" style="min-width:350px; width:350px;">
                    <tbody>
                        <tr>
                            <td colspan="2" valign="top" style="padding:0">
                                <p style="line-height:14px">
                                    <span style="font-size:14px; font-family:'Tahoma',sans-serif; color:#F57C4B">
                                        {{ name }}
                                    </span>
                                </p>
                                <p style="line-height:13px">
                                    <i>
                                        <span style="font-size:13px; font-family:'Tahoma',sans-serif; color:#7F7F7F">
                                            {{ title }}
                                        </span>
                                    </i>
                                    <span style="font-size:12px; font-family:'Tahoma',sans-serif; color:#F57C4B">
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" valign="top" style="padding:0">
                                <div style="height:6px; line-height:6px; font-size:6px;">&nbsp;</div>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2" valign="top" style="padding:0; min-width:52px; max-width:52px; width:52px;" v-show="showIcon === 'Yes'">
                                <div style="height:3px; line-height:3px; font-size:3px;">&nbsp;</div>
                                <p style="line-height:10px">
                                        
                                    <a href="http://www.lavidge.com/" target="_blank">
                                        <span style="font-family:'Tahoma',sans-serif; color:blue; border:none windowtext 1px; padding:0; text-decoration:none">
                                            <img border="0" width="52" height="20" style="width:52px;height:20px" src="../assets/lavidge_small.png" alt="Lavidge Logo" >
                                        </span>
                                    </a>
                                    <span style="font-family:'Tahoma',sans-serif; color:#414042"></span>
                                </p>
                            </td>
                            <td align="left" valign="top" style="padding:0">
                                <p style="line-height:10px">
                                    <template v-if="phone.length > 0">
                                        <b>
                                            <span style="font-size:12px; font-family:'Tahoma',sans-serif; color:#F57C4B">
                                                P
                                            </span>
                                        </b>
                                        <span style="font-size:12px; font-family:'Tahoma',sans-serif; color:#414042">
                                            &nbsp;{{ phone }}&nbsp;&nbsp;&nbsp;
                                        </span>
                                    </template>
                                    <template v-if="fax.length > 0">
                                        <b>
                                            <span style="font-size:12px; font-family:'Tahoma',sans-serif; color:#F57C4B">
                                                F
                                            </span>
                                        </b>
                                        <span style="font-size:12px; font-family:'Tahoma',sans-serif; color:#414042">
                                            &nbsp;{{ fax }}
                                        </span>
                                    </template>
                                </p>
                            </td>
                        </tr>
                        <tr v-show="showAddress === 'Yes'">
                            <td valign="bottom" style="padding:0">
                                <p style="line-height:10px">
                                    <span style="font-size:12px; font-family:'Tahoma',sans-serif; color:#414042">
                                        <a href="https://maps.google.com/?q=2777+E+Camelback+Rd,+Ste+300,+Phoenix,+AZ+85016&amp;entry=gmail&amp;source=g" style="color:#15c; text-decoration:underline">
                                            2777 E Camelback Rd, Ste 300,
                                        </a>
                                        <a href="https://maps.google.com/?q=2777+E+Camelback+Rd,+Ste+300,+Phoenix,+AZ+85016&amp;entry=gmail&amp;source=g" style="color:#15c; text-decoration:underline">
                                            Phoenix, AZ 85016
                                        </a>
                                    </span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <slot></slot>
        </section>
    </div>
</template>

<style scoped>
    .column {
        max-width: 400px;
    }
    .box {
        min-width: 360px;
    }
    .title {
        display: grid;
        justify-items: center;
    }
    .section {
        display: grid;
        justify-items: center;
    }
    @media only screen and (min-width:769px) {
        .column {
            margin-left: -1rem;
        }
    }
</style>

<script>
    export default {
        name: 'SignaturePreview',
        props: ['fax','name','phone','showIcon','showAddress','title'],
    }
</script>