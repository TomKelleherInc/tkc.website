import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <p className="text-sm flex">
                <Link href="https://github.com/TomKelleherInc/" target='_github' className="underline transition decoration-dashed text-primary underline-offset-8 hover:opacity-80 mr-4">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_58_1632)"><path d="M9 0C4.02171 0 0 4.11228 0 9.20266C0 13.2571 2.58814 16.7094 6.15857 17.9452C6.60857 18.032 6.77829 17.7441 6.77829 17.514V15.9614C4.275 16.507 3.74014 14.7243 3.74014 14.7243C3.31843 13.6594 2.72829 13.3728 2.72829 13.3728C1.91314 12.797 2.78486 12.8259 2.78486 12.8259C3.68486 12.8837 4.16186 13.7751 4.16186 13.7751C4.97829 15.1844 6.27171 14.7821 6.77829 14.5507C6.86314 13.9473 7.08686 13.545 7.34014 13.3149C5.34343 13.0849 3.23486 12.2803 3.23486 8.77145C3.23486 7.76442 3.57171 6.95984 4.16186 6.29857C4.07829 6.0685 3.76843 5.11931 4.24671 3.85329C4.24671 3.85329 5.00529 3.5943 6.72171 4.80248C7.45497 4.59704 8.21144 4.49096 8.97171 4.48696C9.73029 4.48696 10.5184 4.60133 11.2217 4.80248C12.9381 3.62322 13.6967 3.85329 13.6967 3.85329C14.175 5.11931 13.8651 6.0685 13.7816 6.29857C14.373 6.92961 14.7099 7.76442 14.7099 8.77014C14.7099 12.3079 12.6 13.0849 10.6033 13.3149C10.9119 13.6029 11.2217 14.1484 11.2217 15.0109V17.5429C11.2217 17.8019 11.3901 18.0885 11.8401 17.9741C15.4131 16.7081 18 13.2571 18 9.20266C18 4.11228 13.9783 0 9 0Z" fill="currentColor"></path></g><defs><clipPath id="clip0_58_1632"><rect width="18" height="18" fill="white"></rect></clipPath></defs></svg>
                </Link>
                <Link href="https://x.com/TomKelleherInc/" target='_x' className="underline transition decoration-dashed text-primary underline-offset-8 hover:opacity-80">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4407 16.2505L8.03531 11.3967L3.77229 16.2505H1.96875L7.23518 10.2559L1.96875 2.75049H6.59922L9.80871 7.32516L13.83 2.75049H15.6336L10.6115 8.46743L16.0711 16.2505H11.4407ZM13.4491 14.8821H12.2349L4.55113 4.11891H5.76551L8.84292 8.42859L9.37505 9.17643L13.4491 14.8821Z" fill="currentColor"></path></svg>
                </Link>
            </p>
        </footer>
    );
};
