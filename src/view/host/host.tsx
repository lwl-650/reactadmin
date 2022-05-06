import * as React from 'react'
import "./host.scss"
import { Card, Col, Row } from 'antd';


interface HostProps {

}

const host: React.FC<HostProps> = (): React.ReactElement => {
    const [windowSize, setWindowSize] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    React.useEffect(() => {

        const updateSize = () => setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);

    }, [])

    console.log(windowSize)
    return (
        <div className='host'>

            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}
                            hoverable={true} type="inner"
                        >
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>

                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={true} type="inner"
                            hoverable={true}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={true} type="inner"
                            hoverable={true}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default host