<template>
    <div class="contacts-comp-container">
        <div></div>
        <div>
            <h1>
                {{ t(site.contacts.headline1) }}
                <br />
                {{ t(site.contacts.headline2) }}
            </h1>

            <div class="contacts-comp-box-info">
                <div class="left" >
                    <div>
                        {{ t(site.contacts.locationLine1) }}
                        <br/>
                        {{ t(site.contacts.locationLine2) }}
                    </div>
                </div>
                <div class="right">
                    <p style="font-weight: 400">{{ t(site.contacts.city) }}</p>
                    <p>{{ t(site.contacts.country) }}</p>
                </div>
            </div>

            <div class="contacts-comp-box-info">
                <div class="left">{{ t(site.contacts.phoneEmail) }}</div>
                <div class="right">
                    <p>+7 (921) 443-23-10</p>
                    <br/>
                    <p>hello.pere.design@mail.ru</p>
                </div>
            </div>

            <div class="contacts-comp-box-info">
                <div class="left">{{ t(site.contacts.social) }}</div>
                <div class="right right-social">
                    <div>
                        <TelegramIcon />
                        <span>Telegram</span>
                    </div>

                    <div>
                        <InstagramIcon />
                        <span>Instagram</span>
                    </div>

                    <div>
                        <YouTubeIcon />
                        <span>YouTube</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TelegramIcon from '../icons/TelegramIcon.vue'
import InstagramIcon from '../icons/InstagramIcon.vue'
import YouTubeIcon from '../icons/YouTubeIcon.vue'
import { useSiteLocale } from '@/composables/useSiteLocale'
import { site } from '@/locales/site'

const { t } = useSiteLocale()
</script>

<style scoped>
.contacts-comp-container{
    max-width: 1520px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
}

.contacts-comp-box-info{
    display: grid;
    grid-template-columns: 8fr 4fr;
    padding-top: 25px;
    padding-bottom: 25px;
    border-top: 1px solid #000000;
}
.left{
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
}

.right{
    font-size: 20px;
    line-height: 100%;
    font-weight: 400;
}
.right-social{
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.right > div {
    display: flex;
    align-items: center;
    gap: 8px;
}

.right svg {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    display: block;
}

h1{
    font-size: 40px;
    font-weight: 600;
    line-height: 120%;
    margin-bottom: 40px;
    letter-spacing: 0;
}

@media (max-width: 768px) {

    h1 {
        font-size: 24px;
    }

    .contacts-comp-container {
        display: grid;
        grid-template-columns: 1fr;
        padding: 0 16px 16px;
    }

    .contacts-comp-box-info{
        grid-template-columns: 1fr 1fr;
    }

    .left {
        font-size: 14px;
        font-weight: 600;
    }

    .right {
        font-size: 14px;
    }

}

</style>
