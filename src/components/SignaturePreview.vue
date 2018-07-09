<template>
    <div class="column">
        <section id="preview" class="section">
            <h2 class="title is-4">Preview</h2>
            <div id="signature-table" class="box">
                <table border="0" cellspacing="0" cellpadding="0" width="350" style="min-width:350px; width:350px;">
                    <tbody>
                        <tr>
                            <td colspan="2" valign="top" style="padding:0; line-height:16px; font-size:16px; font-family:'Tahoma',sans-serif; color:#F57C4B">
                                {{ name }}
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" valign="top" style="padding:0">
                                <div style="height:4px; line-height:4px; font-size:4px;">&nbsp;</div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" valign="top" style="padding:0; line-height:13px; font-size:13px; font-family:'Tahoma',sans-serif; color:#7F7F7F">
                                <i>{{ title }}</i>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" valign="top" style="padding:0">
                                <div style="height:8px; line-height:8px; font-size:8px;">&nbsp;</div>
                            </td>
                        </tr>
                        <tr v-if="showIcon === 'No'">
                            <td colspan="2" valign="top" style="padding:0; line-height:13px; font-size:13px; font-family:'Tahoma',sans-serif; font-weight:bold; color:#7F7F7F">
                                <strong>LAVIDGE</strong>
                                <div style="height:4px; line-height:4px; font-size:4px;">&nbsp;</div>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="2" valign="top" style="padding:0; min-width:52px; max-width:52px; width:52px;" v-if="showIcon === 'Yes'">
                                <table border="0" cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div style="font-size:3px; line-height:3px; height:3px">&nbsp;</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="top" style="padding:0;">
                                                <a href="http://www.lavidge.com/" target="_blank">
                                                    <img border="0" width="52" height="20" style="width:52px; font-size:16px;" src="http://files.lavidgeinteractive.com/lavidge/images/icons/lavidge_small.png" alt="LAVIDGE" >
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td align="left" valign="top" style="padding:0">
                                <table border="0" cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr v-if="phone.length > 0 || fax.length > 0">
                                            <td valign="top" style="color:#414042; font-family:'Tahoma', sans-serif; font-size:12px; line-height:12px; padding:0;">
                                                <b>
                                                    <span style="font-weight:bold; color:#F57C4B" v-if="phone.length > 0">
                                                        P
                                                    </span>
                                                </b>
                                                &nbsp;{{ phone }}&nbsp;&nbsp;&nbsp;
                                                <b>
                                                    <span style="font-weight:bold; color:#F57C4B" v-if="fax.length > 0">
                                                        F
                                                    </span>
                                                </b>
                                                &nbsp;{{ fax }}
                                            </td>
                                        </tr>
                                        <tr v-show="showAddress === 'Yes'">
                                            <td valign="bottom" style="padding:0; line-height:12px; font-size:12px; font-family:'Tahoma',sans-serif; color:#414042">
                                                <a href="https://maps.google.com/?q=2777+E+Camelback+Rd,+Ste+300,+Phoenix,+AZ+85016&amp;entry=gmail&amp;source=g" style="color:#15c; text-decoration:underline">
                                                    2777 E Camelback Rd, Ste 300,
                                                </a>
                                                <a href="https://maps.google.com/?q=2777+E+Camelback+Rd,+Ste+300,+Phoenix,+AZ+85016&amp;entry=gmail&amp;source=g" style="color:#15c; text-decoration:underline">
                                                    Phoenix, AZ 85016
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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